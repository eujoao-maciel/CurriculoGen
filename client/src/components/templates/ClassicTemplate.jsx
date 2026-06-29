import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    color: "#374151",
    fontSize: 11,
  },

  header: {
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 2,
  },

  name: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 8,
  },

  contactContainer: {
    flexDirection: "column",
    gap: 2,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
  },

  experienceItem: {
    borderLeftWidth: 2,
    paddingLeft: 10,
    marginBottom: 12,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  position: {
    fontSize: 12,
    fontWeight: 700,
  },

  company: {
    color: "#4b5563",
    marginTop: 2,
  },

  description: {
    marginTop: 4,
    lineHeight: 1.5,
  },

  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skill: {
    marginRight: 12,
    marginBottom: 6,
  },
});

export const ClassicTemplate = ({
  data,
  accentColor = "#3B82F6",
}) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";

    const [year, month] = dateStr.split("-");

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
    ];

    return `${months[Number(month) - 1]}/${year}`;
  };

  const personalInfo = data?.personal_info ?? {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}

        <View
          style={[
            styles.header,
            {
              borderColor: accentColor,
            },
          ]}
        >
          <Text
            style={[
              styles.name,
              {
                color: accentColor,
              },
            ]}
          >
            {personalInfo.full_name || "Seu Nome"}
          </Text>

          <View style={styles.contactContainer}>
            {personalInfo.email ? (
              <Text>Email: {String(personalInfo.email)}</Text>
            ) : null}

            {personalInfo.phone ? (
              <Text>Tel: {String(personalInfo.phone)}</Text>
            ) : null}

            {personalInfo.location ? (
              <Text>
                Local: {String(personalInfo.location)}
              </Text>
            ) : null}

            {personalInfo.linkedin ? (
              <Text>
                LinkedIn: {String(personalInfo.linkedin)}
              </Text>
            ) : null}

            {personalInfo.website ? (
              <Text>
                Site: {String(personalInfo.website)}
              </Text>
            ) : null}
          </View>
        </View>

        {/* RESUMO */}

        {data?.professional_summary ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: accentColor,
                },
              ]}
            >
              RESUMO
            </Text>

            <Text>
              {String(data.professional_summary)}
            </Text>
          </View>
        ) : null}

        {/* EXPERIÊNCIA */}

        {Array.isArray(data?.experience) &&
        data.experience.length > 0 ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: accentColor,
                },
              ]}
            >
              EXPERIÊNCIA PROFISSIONAL
            </Text>

            {data.experience.map((exp, index) => (
              <View
                key={index}
                style={[
                  styles.experienceItem,
                  {
                    borderLeftColor: accentColor,
                  },
                ]}
              >
                <View style={styles.rowBetween}>
                  <View>
                    <Text style={styles.position}>
                      {exp?.position || ""}
                    </Text>

                    <Text style={styles.company}>
                      {exp?.company || ""}
                    </Text>
                  </View>

                  <Text>
                    {formatDate(exp?.start_date)}
                    {" - "}
                    {exp?.is_current
                      ? "Atual"
                      : formatDate(exp?.end_date)}
                  </Text>
                </View>

                {exp?.description ? (
                  <Text style={styles.description}>
                    {String(exp.description)}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>
        ) : null}

        {/* PROJETOS */}

        {Array.isArray(data?.project) &&
        data.project.length > 0 ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: accentColor,
                },
              ]}
            >
              PROJETOS
            </Text>

            {data.project.map((proj, index) => (
              <View
                key={index}
                style={[
                  styles.experienceItem,
                  {
                    borderLeftColor: accentColor,
                  },
                ]}
              >
                <Text style={styles.position}>
                  {proj?.name || ""}
                </Text>

                {proj?.description ? (
                  <Text style={styles.description}>
                    {String(proj.description)}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>
        ) : null}

        {/* EDUCAÇÃO */}

        {Array.isArray(data?.education) &&
        data.education.length > 0 ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: accentColor,
                },
              ]}
            >
              ESCOLARIDADE
            </Text>

            {data.education.map((edu, index) => (
              <View
                key={index}
                style={{ marginBottom: 8 }}
              >
                <Text style={styles.position}>
                  {edu?.field
                    ? `${edu.field} - `
                    : ""}
                  {edu?.degree || ""}
                </Text>

                <Text>
                  {edu?.institution || ""}
                </Text>
              </View>
            ))}
          </View>
        ) : null}

        {/* HABILIDADES */}

        {Array.isArray(data?.skills) &&
        data.skills.length > 0 ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: accentColor,
                },
              ]}
            >
              HABILIDADES
            </Text>

            <View style={styles.skillContainer}>
              {data.skills.map((skill, index) => (
                <Text
                  key={index}
                  style={styles.skill}
                >
                  • {String(skill)}
                </Text>
              ))}
            </View>
          </View>
        ) : null}
      </Page>
    </Document>
  );
};
