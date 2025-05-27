package ru.emiren.contest.Mapper;

import com.deepoove.poi.data.*;
import com.deepoove.poi.data.style.Style;
import lombok.extern.slf4j.Slf4j;
import ru.emiren.contest.DTO.Generator.ContestData;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class ContestMapper {

    public static ContestData toContestData(Map<String,Object> data){
        log.info("ContestMapper toContestData with data: {}", data.toString());
        Style numberingAnnotationStyle = Style.builder().buildFontFamily("Times New Roman").buildFontSize(11.5).buildItalic().build();

        ContestData contestData = new ContestData();
        contestData.setProjectName(data.get("projectName").toString());
        contestData.setCategory(data.get("category").toString());
        contestData.setMainEducationalOrScientificUnit(data.get("scientificDivision").toString());
        contestData.setKeywords(String.join(",", ((List<String>) data.get("keywords"))));

        Style numberingSciAreaStyle = Style.builder().buildFontFamily("Times New Roman").buildFontSize(12).build();

        contestData.setScientificArea(handleList(numberingSciAreaStyle, data.get("scientificAreas")));
        contestData.setAnnotationNovelty(handleList(numberingAnnotationStyle, data.get("novelty")));
        contestData.setAnnotationRelevance(handleList(numberingAnnotationStyle, data.get("actuality")));
        contestData.setPlannedScientificResults(handleList(numberingAnnotationStyle, data.get("plannedResults")));
        contestData.setAnnotationGoals(handleList(numberingAnnotationStyle, data.get("goals")));
        contestData.setProjectName(data.get("projectName").toString());
        contestData.setDescriptionOfMethods(data.get("descriptionOfMethods").toString());
        contestData.setFutureResults(data.get("futureResults").toString());
        contestData.setJustificationOfRequestedFinancing(data.get("justificationOfRequestedFinancing").toString());
        contestData.setFullNameOfSupervisor(data.get("fullNameOfSupervisor").toString());
        contestData.setListOfEstimatedCosts(handleEstimatedCostsObject(data.get("listOfEstimatedCosts")));
        contestData.setProjectSupervisor(data.get("projectSupervisor").toString());
        contestData.setDate(data.get("date").toString());
        contestData.setResearchDirections(data.get("researchDirections").toString());
        contestData.setResearchTeams(handleResearchTeam(numberingAnnotationStyle, data.get("researchTeams")));
        contestData.setProjectTasks(data.get("projectTasks").toString());
        contestData.setDescriptionPlannedScientificResults(data.get("descriptionPlannedScientificResults").toString());
        contestData.setDescriptionOfScientificFuture(data.get("descriptionOfScientificFuture").toString());

        // Third Part

        contestData.setNumberOfArticles1(data.get("numberOfArticles1") != null ? data.get("numberOfArticles1").toString() : null);
        contestData.setNumberOfArticles2(data.get("numberOfArticles2") != null ? data.get("numberOfArticles2").toString() : null);
        contestData.setCommentsOnArticles(data.get("commentsOnArticles") != null ? data.get("commentsOnArticles").toString() : null);
        contestData.setMoneyQuantity1(data.get("moneyQuantity1") != null ? data.get("moneyQuantity1").toString() : null);
        contestData.setMoneyQuantity2(data.get("moneyQuantity2") != null ? data.get("moneyQuantity2").toString() : null);
        contestData.setCommentsOnMoney(data.get("commentsOnMoney") != null ? data.get("commentsOnMoney").toString() : null);
        contestData.setNumberOfParticipation1(data.get("numberOfParticipation1") != null ? data.get("numberOfParticipation1").toString() : null);
        contestData.setNumberOfParticipation2(data.get("numberOfParticipation2") != null ? data.get("numberOfParticipation2").toString() : null);
        contestData.setCommentsOnPublicationEntering(data.get("commentsOnPublicationEntering") != null ? data.get("commentsOnPublicationEntering").toString() : null);
        contestData.setApplicationRegistration1(data.get("applicationRegistration1") != null ? data.get("applicationRegistration1").toString() : null);
        contestData.setApplicationRegistration2(data.get("applicationRegistration2") != null ? data.get("applicationRegistration2").toString() : null);
        contestData.setCommentsOnApplicationRegistration(data.get("commentsOnApplicationRegistration") != null ? data.get("commentsOnApplicationRegistration").toString() : null);
        contestData.setRgdRegistration1(data.get("RgdRegistration1") != null ? data.get("RgdRegistration1").toString() : null);
        contestData.setRgdRegistration2(data.get("RgdRegistration2") != null ? data.get("RgdRegistration2").toString() : null);
        contestData.setCommentsOnRgd(data.get("commentsOnRgd") != null ? data.get("commentsOnRgd").toString() : null);
        contestData.setNumberOfApplications1(data.get("numberOfApplications1") != null ? data.get("numberOfApplications1").toString() : null);
        contestData.setNumberOfApplications2(data.get("numberOfApplications2") != null ? data.get("numberOfApplications2").toString() : null);
        contestData.setCommentsOnNumberOfApplications(data.get("commentsOnNumberOfApplications") != null ? data.get("commentsOnNumberOfApplications").toString() : null);
        contestData.setNumberOfSciMem1(data.get("numberOfSciMem1") != null ? data.get("numberOfSciMem1").toString() : null);
        contestData.setNumberOfSciMem2(data.get("numberOfSciMem2") != null ? data.get("numberOfSciMem2").toString() : null);
        contestData.setCommentsOnNumberOfSciMem(data.get("commentsOnNumberOfSciMem") != null ? data.get("commentsOnNumberOfSciMem").toString() : null);
        contestData.setNumberOfMembersTill39_1(data.get("numberOfMembersTill39_1") != null ? data.get("numberOfMembersTill39_1").toString() : null);
        contestData.setNumberOfMembersTill39_2(data.get("numberOfMembersTill39_2") != null ? data.get("numberOfMembersTill39_2").toString() : null);
        contestData.setCommentsOnNumberOfMembersTill39(data.get("commentsOnNumberOfMembersTill39") != null ? data.get("commentsOnNumberOfMembersTill39").toString() : null);
        contestData.setNumberOfStudents1(data.get("numberOfStudents1") != null ? data.get("numberOfStudents1").toString() : null);
        contestData.setNumberOfStudents2(data.get("numberOfStudents2") != null ? data.get("numberOfStudents2").toString() : null);
        contestData.setCommentsOnNumbersOfStudents(data.get("commentsOnNumbersOfStudents") != null ? data.get("commentsOnNumbersOfStudents").toString() : null);

        // Forth Part 1
        contestData.setFondResult1(data.get("fondResult1") != null ? data.get("fondResult1").toString() : null);
        contestData.setFondResult2(data.get("fondResult2") != null ? data.get("fondResult2").toString() : null);
        contestData.setFondResultTotal(data.get("fondResultTotal") != null ? data.get("fondResultTotal").toString() : null);
        contestData.setProjectManager1(data.get("projectManager1") != null ? data.get("projectManager1").toString() : null);
        contestData.setProjectManager2(data.get("projectManager2") != null ? data.get("projectManager2").toString() : null);
        contestData.setProjectManagerTotal(data.get("projectManagerTotal") != null ? data.get("projectManagerTotal").toString() : null);
        contestData.setJuniorSciAssoсiate1(data.get("juniorSciAssoсiate1") != null ? data.get("juniorSciAssoсiate1").toString() : null);
        contestData.setJuniorSciAssoсiate2(data.get("juniorSciAssoсiate2") != null ? data.get("juniorSciAssoсiate2").toString() : null);
        contestData.setJuniorSciAssoсiateTotal(data.get("juniorSciAssoсiateTotal") != null ? data.get("juniorSciAssoсiateTotal").toString() : null);
        contestData.setPhdStudents1(data.get("phdStudents1") != null ? data.get("phdStudents1").toString() : null);
        contestData.setPhdStudents2(data.get("phdStudents2") != null ? data.get("phdStudents2").toString() : null);
        contestData.setPhdStudentsTotal(data.get("phdStudentsTotal") != null ? data.get("phdStudentsTotal").toString() : null);
        contestData.setStudent1(data.get("student1") != null ? data.get("student1").toString() : null);
        contestData.setStudent2(data.get("student2") != null ? data.get("student2").toString() : null);
        contestData.setStudentTotal(data.get("studentTotal") != null ? data.get("studentTotal").toString() : null);
        contestData.setHardware1(data.get("hardware1") != null ? data.get("hardware1").toString() : null);
        contestData.setHardware2(data.get("hardware2") != null ? data.get("hardware2").toString() : null);
        contestData.setHardwareTotal(data.get("hardwareTotal") != null ? data.get("hardwareTotal").toString() : null);
        contestData.setSoftware1(data.get("software1") != null ? data.get("software1").toString() : null);
        contestData.setSoftware2(data.get("software2") != null ? data.get("software2").toString() : null);
        contestData.setSoftwareTotal(data.get("softwareTotal") != null ? data.get("softwareTotal").toString() : null);
        contestData.setBusinessTrip1(data.get("businessTrip1") != null ? data.get("businessTrip1").toString() : null);
        contestData.setBusinessTrip2(data.get("businessTrip2") != null ? data.get("businessTrip2").toString() : null);
        contestData.setBusinessTripTotal(data.get("businessTripTotal") != null ? data.get("businessTripTotal").toString() : null);
        contestData.setOutsource1(data.get("outsource1") != null ? data.get("outsource1").toString() : null);
        contestData.setOutsource2(data.get("outsource2") != null ? data.get("outsource2").toString() : null);
        contestData.setOutsourceTotal(data.get("outsourceTotal") != null ? data.get("outsourceTotal").toString() : null);
        contestData.setOtherExpenses1(data.get("otherExpenses1") != null ? data.get("otherExpenses1").toString() : null);
        contestData.setOtherExpenses2(data.get("otherExpenses2") != null ? data.get("otherExpenses2").toString() : null);
        contestData.setOtherExpensesTotal(data.get("otherExpensesTotal") != null ? data.get("otherExpensesTotal").toString() : null);
        contestData.setTotal1(data.get("total1") != null ? data.get("total1").toString() : null);
        contestData.setTotal2(data.get("total2") != null ? data.get("total2").toString() : null);
        contestData.setTotal3(data.get("total3") != null ? data.get("total3").toString() : null);

        /*
            private TableRenderData expendituresTable; // id; position + '/' + status ; quantityOfStaff ; annualFOT
            private TableRenderData decodingOfExpensesTable; // id ; name ; quantity ; pricePerUnit ; totalSum
         */


        return contestData;
    }

    private static NumberingRenderData handleResearchTeam(Style numberingAnnotationStyle, Object researchTeams) {
        if (researchTeams instanceof List<?>) {
            NumberingRenderData num = new NumberingRenderData(NumberingFormat.DECIMAL, new ArrayList<>());

            for (Object obj : (List<?>) researchTeams) {
                String res = null;
                if (obj instanceof Map) {
                    Map<String, String> data = (Map<String, String>) obj;
                    res = data.get("fullName") + " " +
                            data.get("workPlace") + " " +
                            data.get("position") + " " +
                            data.get("education") + " " +
                            data.get("speciality") + " " +
                            data.get("academicDegree") + " " +
                            data.get("academicTitle") + " " +
                            data.get("roleInProject") + " " +
                            data.get("experience");
                    log.info("result is {}", res);
                    num.getItems().add(new NumberingItemRenderData(0, Paragraphs.of(new TextRenderData(res) {{
                        setStyle(style);
                    }}).indentFirstLine(2).create()));
                }

            }
            return num;
        }
        return null;
    }

    private static String handleEstimatedCostsObject(Object listOfEstimatedCosts) {
        if (listOfEstimatedCosts instanceof List) {
            StringBuffer result = new StringBuffer();
            DecimalFormatSymbols decimalFormatSymbols = new DecimalFormatSymbols(Locale.ROOT);
            decimalFormatSymbols.setDecimalSeparator(' ');
            DecimalFormat decimalFormat = new DecimalFormat("#,###", decimalFormatSymbols);
            for (Object obj : (List<?>) listOfEstimatedCosts ) {
                if (obj instanceof Map) {
                    Map<String, String> map = (Map<String, String>) obj;

                    result.append(
                            (map.get("item") != null && !map.get("item").isEmpty()
                                    ? String.valueOf(map.get("item")).substring(0, 1).toUpperCase(Locale.ROOT) + String.valueOf(map.get("item")).substring(1)
                                    : ""
                            ) + " (" +
                                    String.valueOf(decimalFormat.format(map.get("total")))
                                    + " руб.)\n"
                    );
                }
            }
            return result.toString();
        }

        return null;
    }

    private static NumberingRenderData handleList(Style style, Object data){
        if (data instanceof List<?>) {
            NumberingRenderData num = new NumberingRenderData(NumberingFormat.DECIMAL, new ArrayList<>());

            for (Object obj : (List<String>) data) {
                num.getItems().add(new NumberingItemRenderData(0, Paragraphs.of(new TextRenderData(obj.toString()) {{
                    setStyle(style);
                }}).indentFirstLine(2).create()));
            }
            return num;
        }
        return null;
    }
}
