import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: {
        color: "#1f2937",
        fontSize: 10.5,
    },
    header: {
        padding: 32,
    },
    name: {
        fontSize: 24,
        fontWeight: 300,
        color: "#ffffff",
        marginBottom: 10,
    },
    contactGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    contactItem: {
        width: "50%",
        fontSize: 9,
        color: "#ffffff",
        marginBottom: 4,
    },
    body: {
        padding: 32,
    },
    section: {
        marginBottom: 22,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 300,
        marginBottom: 12,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
    },
    summaryText: {
        color: "#374151",
        lineHeight: 1.5,
    },
    expItem: {
        borderLeftWidth: 2,
        paddingLeft: 12,
        marginBottom: 16,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    position: {
        fontSize: 12,
        color: "#111827",
    },
    company: {
        fontSize: 11,
        fontWeight: 300,
        marginTop: 2,
    },
    dateBadge: {
        fontSize: 8,
        color: "#6b7280",
        backgroundColor: "#f3f4f6",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 3,
    },
    description: {
        fontSize: 9.5,
        color: "#374151",
        marginTop: 6,
    },
    descriptionLine: {
        marginBottom: 2,
    },
    twoColGrid: {
        flexDirection: "row",
        gap: 24,
    },
    col: {
        width: "50%",
    },
    eduItem: {
        marginBottom: 10,
    },
    eduDegree: {
        fontSize: 11,
        color: "#111827",
    },
    eduInstitution: {
        fontSize: 11,
        fontWeight: 300,
        marginTop: 1,
    },
    skillsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
    },
    skillPill: {
        fontSize: 9,
        color: "#ffffff",
        paddingHorizontal: 9,
        paddingVertical: 4,
        borderRadius: 10,
    },
})

const MultiLineText = ({ children, style }) => {
    if (!children) return null

    return (
        <View style={style}>
            {String(children)
                .split("\n")
                .map((line, index) => (
                    <Text key={index} style={styles.descriptionLine}>
                        {line}
                    </Text>
                ))}
        </View>
    )
}

export const ModernTemplatePdf = ({ data = {}, accentColor = "#3B82F6" }) => {
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
                <View style={[styles.header, { backgroundColor: accentColor }]}>
                    <Text style={styles.name}>
                        {personalInfo.full_name || "Seu Nome"}
                    </Text>

                    <View style={styles.contactGrid}>
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

                <View style={styles.body}>
                    {/* RESUMO */}
                    {data?.professional_summary && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Resumo</Text>
                            <MultiLineText>
                                {String(data.professional_summary)}
                            </MultiLineText>
                        </View>
                    )}

                    {/* EXPERIÊNCIA */}
                    {Array.isArray(data?.experience) &&
                        data.experience.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>
                                    Experiência
                                </Text>

                                {data.experience.map((exp, i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.expItem,
                                            { borderLeftColor: accentColor },
                                        ]}
                                    >
                                        <View style={styles.rowBetween}>
                                            <View>
                                                <Text style={styles.position}>
                                                    {exp?.position || ""}
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.company,
                                                        { color: accentColor },
                                                    ]}
                                                >
                                                    {exp?.company || ""}
                                                </Text>
                                            </View>
                                            <Text style={styles.dateBadge}>
                                                {formatDate(exp?.start_date)} -{" "}
                                                {exp?.is_current
                                                    ? "Atual"
                                                    : formatDate(exp?.end_date)}
                                            </Text>
                                        </View>
                                        {exp?.description && (
                                            <Text style={styles.description}>
                                                {String(exp.description)}
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}

                    {/* PROJETOS */}
                    {Array.isArray(data?.project) &&
                        data.project.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>
                                    Projetos
                                </Text>

                                {data.project.map((proj, i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.expItem,
                                            { borderLeftColor: accentColor },
                                        ]}
                                    >
                                        <Text style={styles.position}>
                                            {proj?.name || ""}
                                        </Text>
                                        {proj?.description && (
                                            <Text style={styles.description}>
                                                {String(proj.description)}
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}

                    {/* FORMAÇÃO + HABILIDADES */}
                    <View style={styles.twoColGrid}>
                        {Array.isArray(data?.education) &&
                            data.education.length > 0 && (
                                <View style={styles.col}>
                                    <Text style={styles.sectionTitle}>
                                        Formação
                                    </Text>
                                    {data.education.map((edu, i) => (
                                        <View key={i} style={styles.eduItem}>
                                            <Text style={styles.eduDegree}>
                                                {edu?.field
                                                    ? `${edu.field} - `
                                                    : ""}
                                                {edu?.degree || ""}
                                            </Text>
                                            <Text
                                                style={[
                                                    styles.eduInstitution,
                                                    { color: accentColor },
                                                ]}
                                            >
                                                {edu?.institution || ""}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            )}

                        {Array.isArray(data?.skills) &&
                            data.skills.length > 0 && (
                                <View style={styles.col}>
                                    <Text style={styles.sectionTitle}>
                                        Habilidades
                                    </Text>
                                    <View style={styles.skillsWrap}>
                                        {data.skills.map((skill, i) => (
                                            <Text
                                                key={i}
                                                style={[
                                                    styles.skillPill,
                                                    {
                                                        backgroundColor:
                                                            accentColor,
                                                    },
                                                ]}
                                            >
                                                {String(skill)}
                                            </Text>
                                        ))}
                                    </View>
                                </View>
                            )}
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default ModernTemplatePdf
