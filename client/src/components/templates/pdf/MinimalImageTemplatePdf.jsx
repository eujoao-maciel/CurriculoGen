import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: {
        color: "#3f3f46",
        fontSize: 10,
    },
    topRow: {
        flexDirection: "row",
        minHeight: 110,
    },
    avatarCol: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    avatarCircle: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    avatarFallback: {
        width: 90,
        height: 90,
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarInitials: {
        fontSize: 14,
        fontWeight: 700,
    },
    headerCol: {
        width: "70%",
        justifyContent: "center",
        padding: 24,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: "#3f3f46",
    },
    profession: {
        fontSize: 9,
        textTransform: "uppercase",
        color: "#52525b",
        marginTop: 4,
        fontWeight: 500,
    },
    bodyRow: {
        flexDirection: "row",
        flexGrow: 1,
    },
    aside: {
        width: "30%",
        borderRightWidth: 1,
        borderRightColor: "#e4e4e7",
        padding: 18,
    },
    main: {
        width: "70%",
        padding: 24,
    },
    asideTitle: {
        fontSize: 9,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1,
        color: "#52525b",
        marginBottom: 8,
    },
    asideSection: {
        marginBottom: 18,
    },
    contactRow: {
        marginBottom: 6,
    },
    eduItem: {
        marginBottom: 8,
    },
    eduDegree: {
        color: "#3f3f46",
    },
    eduInstitution: {
        fontSize: 9,
        color: "#52525b",
        marginTop: 1,
    },
    skillItem: {
        fontSize: 9,
        color: "#3f3f46",
        marginBottom: 3,
    },
    mainTitle: {
        fontSize: 9,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 8,
    },
    mainSection: {
        marginBottom: 18,
    },
    summaryText: {
        lineHeight: 1.5,
        color: "#3f3f46",
    },
    expItem: {
        marginBottom: 14,
    },
    expRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    expPosition: {
        fontSize: 11,
        color: "#18181b",
    },
    expCompany: {
        fontSize: 10,
        color: "#52525b",
        marginTop: 1,
    },
    expDate: {
        fontSize: 8,
        color: "#71717a",
    },
    bullet: {
        fontSize: 9,
        color: "#3f3f46",
        marginTop: 2,
        lineHeight: 1.4,
    },
    projItem: {
        marginBottom: 12,
    },
    projName: {
        fontSize: 11,
        color: "#18181b",
    },
})

export const MinimalImageTemplatePdf = ({
    data = {},
    accentColor = "#2563eb",
}) => {
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

    const getImageSrc = (image) => {
        if (!image) return null
        if (typeof image === "string") return image
        try {
            return URL.createObjectURL(image)
        } catch (e) {
            return null
        }
    }

    const personalInfo = data?.personal_info ?? {}
    const imageSrc = getImageSrc(personalInfo.image)

    const initials = personalInfo.full_name
        ? personalInfo.full_name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")
        : "SN"

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* TOPO: foto + nome */}
                <View style={styles.topRow}>
                    <View style={styles.avatarCol}>
                        {imageSrc ? (
                            <Image src={imageSrc} style={styles.avatarCircle} />
                        ) : (
                            <View
                                style={[
                                    styles.avatarFallback,
                                    { backgroundColor: `${accentColor}20` },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.avatarInitials,
                                        { color: accentColor },
                                    ]}
                                >
                                    {initials}
                                </Text>
                            </View>
                        )}
                    </View>

                    <View style={styles.headerCol}>
                        <Text style={styles.name}>
                            {personalInfo.full_name || "Seu Nome"}
                        </Text>
                        <Text style={styles.profession}>
                            {personalInfo.profession || "Profissão"}
                        </Text>
                    </View>
                </View>

                {/* CORPO: aside + main */}
                <View style={styles.bodyRow}>
                    {/* ASIDE */}
                    <View style={styles.aside}>
                        <View style={styles.asideSection}>
                            <Text style={styles.asideTitle}>Contato</Text>
                            {personalInfo.phone && (
                                <Text style={styles.contactRow}>
                                    {personalInfo.phone}
                                </Text>
                            )}
                            {personalInfo.email && (
                                <Text style={styles.contactRow}>
                                    {personalInfo.email}
                                </Text>
                            )}
                            {personalInfo.location && (
                                <Text style={styles.contactRow}>
                                    {personalInfo.location}
                                </Text>
                            )}
                            {personalInfo.linkedin && (
                                <Text style={styles.contactRow}>
                                    {personalInfo.linkedin}
                                </Text>
                            )}
                        </View>

                        {Array.isArray(data?.education) &&
                            data.education.length > 0 && (
                                <View style={styles.asideSection}>
                                    <Text style={styles.asideTitle}>
                                        Escolaridade
                                    </Text>
                                    {data.education.map((edu, i) => (
                                        <View key={i} style={styles.eduItem}>
                                            <Text style={styles.eduDegree}>
                                                {edu?.field
                                                    ? `${edu.field} - `
                                                    : ""}
                                                {edu?.degree || ""}
                                            </Text>
                                            <Text style={styles.eduInstitution}>
                                                {edu?.institution || ""}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            )}

                        {Array.isArray(data?.skills) &&
                            data.skills.length > 0 && (
                                <View>
                                    <Text style={styles.asideTitle}>
                                        Habilidades
                                    </Text>
                                    {data.skills.map((skill, i) => (
                                        <Text key={i} style={styles.skillItem}>
                                            {String(skill)}
                                        </Text>
                                    ))}
                                </View>
                            )}
                    </View>

                    {/* MAIN */}
                    <View style={styles.main}>
                        {data?.professional_summary && (
                            <View style={styles.mainSection}>
                                <Text
                                    style={[
                                        styles.mainTitle,
                                        { color: accentColor },
                                    ]}
                                >
                                    Resumo
                                </Text>
                                <Text style={styles.summaryText}>
                                    {String(data.professional_summary)}
                                </Text>
                            </View>
                        )}

                        {Array.isArray(data?.experience) &&
                            data.experience.length > 0 && (
                                <View style={styles.mainSection}>
                                    <Text
                                        style={[
                                            styles.mainTitle,
                                            { color: accentColor },
                                        ]}
                                    >
                                        Experiência
                                    </Text>

                                    {data.experience.map((exp, i) => (
                                        <View key={i} style={styles.expItem}>
                                            <View style={styles.expRow}>
                                                <View>
                                                    <Text
                                                        style={
                                                            styles.expPosition
                                                        }
                                                    >
                                                        {exp?.position || ""}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.expCompany
                                                        }
                                                    >
                                                        {exp?.company || ""}
                                                    </Text>
                                                </View>
                                                <Text style={styles.expDate}>
                                                    {formatDate(
                                                        exp?.start_date
                                                    )}{" "}
                                                    -{" "}
                                                    {exp?.is_current
                                                        ? "Atual"
                                                        : formatDate(
                                                              exp?.end_date
                                                          )}
                                                </Text>
                                            </View>

                                            {exp?.description &&
                                                exp.description
                                                    .split("\n")
                                                    .map((line, k) => (
                                                        <Text
                                                            key={k}
                                                            style={
                                                                styles.bullet
                                                            }
                                                        >
                                                            • {line}
                                                        </Text>
                                                    ))}
                                        </View>
                                    ))}
                                </View>
                            )}

                        {Array.isArray(data?.project) &&
                            data.project.length > 0 && (
                                <View>
                                    <Text
                                        style={[
                                            styles.mainTitle,
                                            { color: accentColor },
                                        ]}
                                    >
                                        Projetos
                                    </Text>

                                    {data.project.map((proj, i) => (
                                        <View key={i} style={styles.projItem}>
                                            <Text style={styles.projName}>
                                                {proj?.name || ""}
                                            </Text>
                                            {proj?.type && (
                                                <Text
                                                    style={{
                                                        color: accentColor,
                                                        fontSize: 9,
                                                        marginTop: 1,
                                                    }}
                                                >
                                                    {proj.type}
                                                </Text>
                                            )}
                                            {proj?.description &&
                                                proj.description
                                                    .split("\n")
                                                    .map((line, k) => (
                                                        <Text
                                                            key={k}
                                                            style={
                                                                styles.bullet
                                                            }
                                                        >
                                                            • {line}
                                                        </Text>
                                                    ))}
                                        </View>
                                    ))}
                                </View>
                            )}
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default MinimalImageTemplatePdf
