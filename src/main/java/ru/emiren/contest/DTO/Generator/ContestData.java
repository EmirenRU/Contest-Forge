package ru.emiren.contest.DTO.Generator;

import com.deepoove.poi.data.*;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContestData {
    private String projectName;
    private String keywords;
    private NumberingRenderData scientificArea;
    private String orientation;
    private String category;
    private NumberingRenderData annotationGoals;
    private NumberingRenderData annotationRelevance;
    private NumberingRenderData annotationNovelty;
    private NumberingRenderData plannedScientificResults;
    private String mainEducationalOrScientificUnit;
    // second part
    private String projectTasks;
    private String descriptionOfMethods;
    private String futureResults;
    private String justificationOfRequestedFinancing;
    private NumberingRenderData researchTeams;
    private String fullNameOfSupervisor;
    private String listOfEstimatedCosts;
    @Size(max = 10)
    private String Date;
    private String projectSupervisor;
    private String researchDirections;
    private String descriptionPlannedScientificResults;
    private String descriptionOfScientificFuture;

    // Third part
    private String numberOfArticles1;
    private String numberOfArticles2;
    private String commentsOnArticles;
    private String moneyQuantity1;
    private String moneyQuantity2;
    private String commentsOnMoney;
    private String numberOfParticipation1;
    private String numberOfParticipation2;
    private String commentsOnPublicationEntering;
    private String applicationRegistration1;
    private String applicationRegistration2;
    private String commentsOnApplicationRegistration;
    private String RgdRegistration1;
    private String RgdRegistration2;
    private String commentsOnRgd;
    private String numberOfApplications1;
    private String numberOfApplications2;
    private String commentsOnNumberOfApplications;
    private String numberOfSciMem1;
    private String numberOfSciMem2;
    private String commentsOnNumberOfSciMem;
    private String numberOfMembersTill39_1;
    private String numberOfMembersTill39_2;
    private String commentsOnNumberOfMembersTill39;
    private String numberOfStudents1;
    private String numberOfStudents2;
    private String commentsOnNumbersOfStudents;

    // Forth Part 1
    private String fondResult1;
    private String fondResult2;
    private String fondResultTotal;
    private String projectManager1;
    private String projectManager2;
    private String projectManagerTotal;
    private String juniorSciAssociate1;
    private String juniorSciAssociate2;
    private String juniorSciAssociateTotal;
    private String phdStudents1;
    private String phdStudents2;
    private String phdStudentsTotal;
    private String student1;
    private String student2;
    private String studentTotal;
    private String hardware1;
    private String hardware2;
    private String hardwareTotal;
    private String software1;
    private String software2;
    private String softwareTotal;
    private String businessTrip1;
    private String businessTrip2;
    private String businessTripTotal;
    private String outsource1;
    private String outsource2;
    private String outsourceTotal;
    private String otherExpenses1;
    private String otherExpenses2;
    private String otherExpensesTotal;
    private String total1;
    private String total2;
    private String total3;

    // Forth Part 2
    private TableRenderData expendituresTable; // id; position + '/' + status ; quantityOfStaff ; annualFOT
    private TableRenderData decodingOfExpensesTable; // id ; name ; quantity ; pricePerUnit ; totalSum
}
