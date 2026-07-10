import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: {
        padding: 40,
        color: "#111827",
        fontSize: 10.5,
    },
    header: {
        marginBottom: 28,
    },
    name: {
        fontSize: 26,
        fontWeight: 300,
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    contactItem: {
        fontSize: 9,
        color: "#4b5563",
    },
    section: {
        marginBottom: 22,
    },
    sectionTitle: {
        fontSize: 9,
        textTransform: "uppercase",
        letterSpacing: 1,
        fontWeight: 500,
        marginBottom: 12,
    },
    summaryText: {
        color: "#374151",
    },
    itemBlock: {
        marginBottom: 14,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 2,
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: 500,
    },
    itemDate: {
        fontSize: 9,
        color: "#6b7280",
    },
    itemSubtitle: {
        color: "#4b5563",
        marginBottom: 4,
    },
    description: {
        color: "#374151",
    },
    skillsText: {
        color: "#374151",
        lineHeight: 1.6,
    },
    lineSpacing: {
        marginBottom: 3,
    },
    blankLine: {
        height: 6,
    },
})

const renderMultilineText = (text, textStyle, keyPrefix = "") => {
    if (!text) return null

    return String(text)
        .split("\n")
        .map((line, i) => {
            if (line.trim() === "") {
                return <View key={`${keyPrefix}-blank-${i}`} style={styles.blankLine} />
            }
            return (
                <Text
                    key={`${keyPrefix}-line-${i}`}
                    style={[textStyle, styles.lineSpacing]}
                >
                    {line}
                </Text>
            )
        })
}

export const MinimalTemplatePdf = ({ data = {}, accentColor = "#2563eb" }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return ""
        const [year, month] = dateStr.split("-")
        const months = [
            "jan",
            "fev",
            "mar",
            "abr",
            "mai",
            "jun",
            "jul",
            "ago",
            "set",
            "out",
            "nov",
            "dez",
        ]
        return `${months[Number(month) - 1]}/${year}`
    }

    const personalInfo = data?.personal_info ?? {}

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.name}>
                        {personalInfo.full_name || "Seu Nome"}
                    </Text>

                    <View style={styles.contactRow}>
                        {personalInfo.email && (
                            <Text style={styles.contactItem}>
                                {personalInfo.email}
                            </Text>
                        )}
                        {personalInfo.phone && (
                            <Text style={styles.contactItem}>
                                {personalInfo.phone}
                            </Text>
                        )}
                        {personalInfo.location && (
                            <Text style={styles.contactItem}>
                                {personalInfo.location}
                            </Text>
                        )}
                        {personalInfo.linkedin && (
                            <Text style={styles.contactItem}>
                                {personalInfo.linkedin}
                            </Text>
                        )}
                        {personalInfo.website && (
                            <Text style={styles.contactItem}>
                                {personalInfo.website}
                            </Text>
                        )}
                    </View>
                </View>

                {/* RESUMO */}
                {data?.professional_summary && (
                    <View style={styles.section}>
                        {renderMultilineText(
                            data.professional_summary,
                            styles.summaryText,
                            "summary"
                        )}
                    </View>
                )}

                {/* EXPERIÊNCIA */}
                {Array.isArray(data?.experience) &&
                    data.experience.length > 0 && (
                        <View style={styles.section}>
                            <Text
                                style={[
                                    styles.sectionTitle,
                                    { color: accentColor },
                                ]}
                            >
                                Experiência
                            </Text>

                            {data.experience.map((exp, i) => (
                                <View key={i} style={styles.itemBlock}>
                                    <View style={styles.rowBetween}>
                                        <Text style={styles.itemTitle}>
                                            {exp?.position || ""}
                                        </Text>
                                        <Text style={styles.itemDate}>
                                            {formatDate(exp?.start_date)} -{" "}
                                            {exp?.is_current
                                                ? "Atual"
                                                : formatDate(exp?.end_date)}
                                        </Text>
                                    </View>
                                    <Text style={styles.itemSubtitle}>
                                        {exp?.company || ""}
                                    </Text>
                                    {exp?.description &&
                                        renderMultilineText(
                                            exp.description,
                                            styles.description,
                                            `exp-${i}`
                                        )}
                                </View>
                            ))}
                        </View>
                    )}

                {/* PROJETOS */}
                {Array.isArray(data?.project) && data.project.length > 0 && (
                    <View style={styles.section}>
                        <Text
                            style={[
                                styles.sectionTitle,
                                { color: accentColor },
                            ]}
                        >
                            Projetos
                        </Text>

                        {data.project.map((proj, i) => (
                            <View key={i} style={styles.itemBlock}>
                                <Text style={styles.itemTitle}>
                                    {proj?.name || ""}
                                </Text>
                                {proj?.description &&
                                    renderMultilineText(
                                        proj.description,
                                        styles.description,
                                        `proj-${i}`
                                    )}
                            </View>
                        ))}
                    </View>
                )}

                {/* ESCOLARIDADE */}
                {Array.isArray(data?.education) &&
                    data.education.length > 0 && (
                        <View style={styles.section}>
                            <Text
                                style={[
                                    styles.sectionTitle,
                                    { color: accentColor },
                                ]}
                            >
                                Escolaridade
                            </Text>

                            {data.education.map((edu, i) => (
                                <View key={i} style={styles.rowBetween}>
                                    <View>
                                        <Text style={styles.itemTitle}>
                                            {edu?.field
                                                ? `${edu.field} - `
                                                : ""}
                                            {edu?.degree || ""}
                                        </Text>
                                        <Text style={styles.itemSubtitle}>
                                            {edu?.institution || ""}
                                        </Text>
                                    </View>
                                    {edu?.graduation_date && (
                                        <Text style={styles.itemDate}>
                                            {formatDate(edu.graduation_date)}
                                        </Text>
                                    )}
                                </View>
                            ))}
                        </View>
                    )}

                {/* HABILIDADES */}
                {Array.isArray(data?.skills) && data.skills.length > 0 && (
                    <View>
                        <Text
                            style={[
                                styles.sectionTitle,
                                { color: accentColor },
                            ]}
                        >
                            Habilidades
                        </Text>
                        <Text style={styles.skillsText}>
                            {data.skills.join("  •  ")}
                        </Text>
                    </View>
                )}
            </Page>
        </Document>
    )
}

export default MinimalTemplatePdf
