import { useState } from 'react';
import { sendProjectData } from '../api/sendProjectData';
import { ProjectInfoPage } from './ProjectInfo';
import { AnnotationPage } from './AnnotationInfo';
import { ProjectDetailsPage } from './projectDetails';
import { KPIPage } from './KPI';
import { BudgetPage } from './Budget';

// Типы данных

export interface ResearchTeamMember {
  fullName: string;
  workPlace: string; // TO BE ADDED SOMEDAY
  position: string;
  education: string;
  speciality: string;
  academicDegree?: string;
  academicTitle?: string;
  roleInProject: string;
  experience: string;
}

export interface EstimatedCost {
  item: string;
  quantity: number;
  pricePerUnit: number;
  total: number;
  justification: string;
}

export interface KPI {
  name: string;
  unit: string;
  year1: string;
  year2: string;
  comment: string;
}


export interface BudgetItem {
  name: string;
  year1: string;
  year2: string;
  total: string;
}

export interface ProjectData {
  projectName: string;
  keywords: string[];
  scientificAreas: string[];
  researchDirections: string[];
  category: string;
  goals: string[];
  actuality: string[];
  novelty: string[];
  plannedResults: string[];
  scientificDivision: string;
  date: string;
  projectSupervisor: string;
  projectTasks: string;
  descriptionPlannedScientificResults: string;
  descriptionOfMethods: string;
  descriptionOfScientificFuture: string;
  futureResults: string;
  justificationOfRequestedFinancing: string;
  researchTeams: ResearchTeamMember[];
  fullNameOfSupervisor: string;
  listOfEstimatedCosts: EstimatedCost[];
      numberOfArticles1: string;
  numberOfArticles2: string;
  commentsOnArticles: string;
  moneyQuantity1: string;
  moneyQuantity2: string;
  commentsOnMoney: string;
  numberOfParticipation1: string;
  numberOfParticipation2: string;
  commentsOnPublicationEntering: string;
  applicationRegistration1: string;
  applicationRegistration2: string;
  commentsOnApplicationRegistration: string;
  RgdRegistration1: string;
  RgdRegistration2: string;
  commentsOnRgd: string;
  numberOfApplications1: string;
  numberOfApplications2: string;
  commentsOnNumberOfApplications: string;
  numberOfSciMem1: string;
  numberOfSciMem2: string;
  commentsOnNumberOfSciMem: string;
  numberOfMembersTill39_1: string;
  numberOfMembersTill39_2: string;
  commentsOnNumberOfMembersTill39: string;
  numberOfStudents1: string;
  numberOfStudents2: string;
  commentsOnNumbersOfStudents: string;
  // Форма 4 - Смета расходов
  fondResult1: string;
  fondResult2: string;
  fondResultTotal: string;
  projectManager1: string;
  projectManager2: string;
  projectManagerTotal: string;
  juniorSciAssociate1: string;
  juniorSciAssociate2: string;
  juniorSciAssociateTotal: string;
  phdStudents1: string;
  phdStudents2: string;
  phdStudentsTotal: string;
  student1: string;
  student2: string;
  studentTotal: string;
  hardware1: string;
  hardware2: string;
  hardwareTotal: string;
  software1: string;
  software2: string;
  softwareTotal: string;
  businessTrip1: string;
  businessTrip2: string;
  businessTripTotal: string;
  outsource1: string;
  outsource2: string;
  outsourceTotal: string;
  otherExpenses1: string;
  otherExpenses2: string;
  otherExpensesTotal: string;
  total1: string;
  total2: string;
  total3: string;
}


// Компонент для управления динамическими полями
export const DynamicFieldGroup = ({
  values,
  label,
  onAdd,
  onRemove,
  onChange,
  isTextarea = false
}: {
  values: string[]  ;
  label: string;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, value: string) => void;
  isTextarea?: boolean;
}) => (
  <div style={{ marginBottom: '25px' }}>
    <label className="form-label">{label}</label>
    {values.map((value, index) => (
      <div key={index} className="d-flex align-items-center mb-2">
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            className="form-input"
            style={{ width: '90%', height: '60px' }}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            className="form-input"
            style={{ width: '90%' }}
          />
        )}
        {values.length > 1 && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="btn btn-danger ms-2"
          >
            ×
          </button>
        )}
        <button
          type="button"
          onClick={onAdd}
          className="btn btn-secondary ms-2"
        >
          +
        </button>
      </div>
    ))}
  </div>
);



export const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState<ProjectData>({
    projectName: '',
    keywords: [''],
    scientificAreas: [''],
    researchDirections: [''],
    category: '',
    goals: [''],
    actuality: [''],
    novelty: [''],
    plannedResults: [''],
    scientificDivision: '',
        date: new Date().toISOString().split('T')[0],
    projectSupervisor: '',
    projectTasks: '',
    descriptionPlannedScientificResults: '',
    descriptionOfMethods: '',
    descriptionOfScientificFuture: '',
    futureResults: '',
    justificationOfRequestedFinancing: '',
    researchTeams: [],
    fullNameOfSupervisor: '',
    listOfEstimatedCosts: [],
 // Форма 3
  numberOfArticles1: '',
  numberOfArticles2: '',
  commentsOnArticles: '',
  moneyQuantity1: '',
  moneyQuantity2: '',
  commentsOnMoney: '',
  numberOfParticipation1: '',
  numberOfParticipation2: '',
  commentsOnPublicationEntering: '',
  applicationRegistration1: '',
  applicationRegistration2: '',
  commentsOnApplicationRegistration: '',
  RgdRegistration1: '',
  RgdRegistration2: '',
  commentsOnRgd: '',
  numberOfApplications1: '',
  numberOfApplications2: '',
  commentsOnNumberOfApplications: '',
  numberOfSciMem1: '',
  numberOfSciMem2: '',
  commentsOnNumberOfSciMem: '',
  numberOfMembersTill39_1: '',
  numberOfMembersTill39_2: '',
  commentsOnNumberOfMembersTill39: '',
  numberOfStudents1: '',
  numberOfStudents2: '',
  commentsOnNumbersOfStudents: '',
  fondResult1: '',
  fondResult2: '',
  fondResultTotal: '',
  projectManager1: '',
  projectManager2: '',
  projectManagerTotal: '',
  juniorSciAssociate1: '',
  juniorSciAssociate2: '',
  juniorSciAssociateTotal: '',
  phdStudents1: '',
  phdStudents2: '',
  phdStudentsTotal: '',
  student1: '',
  student2: '',
  studentTotal: '',
  hardware1: '',
  hardware2: '',
  hardwareTotal: '',
  software1: '',
  software2: '',
  softwareTotal: '',
  businessTrip1: '',
  businessTrip2: '',
  businessTripTotal: '',
  outsource1: '',
  outsource2: '',
  outsourceTotal: '',
  otherExpenses1: '',
  otherExpenses2: '',
  otherExpensesTotal: '',
  total1: '',
  total2: '',
  total3: '',
  });


  const updateFormData = (field: keyof ProjectData, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent):Promise<void> => {
    console.log(formData)
    e.preventDefault();
    try {
      await sendProjectData(formData);
      alert('Данные успешно отправлены!');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке данных');
    }
  };

  return (
    <div className="container d-flex flex-column" style={{ marginBottom: '95px' }}>
      <form onSubmit={handleSubmit} className="form-style d-flex flex-row flex-wrap justify-content-center" style={{ maxWidth: '100%', alignItems: 'flex-start' }}>
        {currentPage === 1 && (
          <ProjectInfoPage
            data={formData}
            updateData={updateFormData}
            nextPage={nextPage}
          />
        )}

        {currentPage === 2 && (
          <AnnotationPage
            data={formData} 
            updateData={updateFormData}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}

        {currentPage === 3 && (
          <ProjectDetailsPage
          data={formData}
          updateData={updateFormData}
          prevPage={prevPage}
            nextPage={nextPage}
          />
        )}

        {currentPage === 4 && (
          <KPIPage
            data={formData}
            updateData={updateFormData}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
        {currentPage === 5 && (
          <BudgetPage
            data={formData}
            updateData={updateFormData}
            prevPage={prevPage}
            onSubmit = {handleSubmit}
          />
        )}
      </form>

      {/* Индикатор прогресса */}
      <div className="d-flex justify-content-center mt-3">
        <div className="progress" style={{ width: '50%' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(currentPage / 2) * 100}%` }}
            aria-valuenow={currentPage}
            aria-valuemin={1}
            aria-valuemax={2}
          >
            Шаг {currentPage} из 3
          </div>
        </div>
      </div>
    </div>
  );
};