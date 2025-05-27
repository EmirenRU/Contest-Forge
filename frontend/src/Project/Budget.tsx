import type { ProjectData } from "./project";

interface BudgetPageProps {
  data: ProjectData;
  updateData: (field: keyof ProjectData, value: unknown) => void;
  prevPage: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export const BudgetPage = ({ data, updateData, prevPage, onSubmit }: BudgetPageProps) => {
  return (
    <div className="page-container">
      <h2>Форма 4. Проект сметы расходов основных средств гранта</h2>
      
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>№ п/п</th>
              <th>Статья расходов</th>
              <th>1 год (тыс. руб.)</th>
              <th>2 год (тыс. руб.)</th>
              <th>Итого (тыс. руб.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Фонд оплаты труда (Итого)</td>
              <td>
                <input
                  type="text"
                  value={data.fondResult1}
                  onChange={(e) => updateData('fondResult1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.fondResult2}
                  onChange={(e) => updateData('fondResult2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.fondResultTotal}
                  onChange={(e) => updateData('fondResultTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>1.1</td>
              <td>Руководитель проекта</td>
              <td>
                <input
                  type="text"
                  value={data.projectManager1}
                  onChange={(e) => updateData('projectManager1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.projectManager2}
                  onChange={(e) => updateData('projectManager2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.projectManagerTotal}
                  onChange={(e) => updateData('projectManagerTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>1.2</td>
              <td>Мл научный сотрудник</td>
              <td>
                <input
                  type="text"
                  value={data.juniorSciAssociate1}
                  onChange={(e) => updateData('juniorSciAssociate1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.juniorSciAssociate2}
                  onChange={(e) => updateData('juniorSciAssociate2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.juniorSciAssociateTotal}
                  onChange={(e) => updateData('juniorSciAssociateTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>1.3</td>
              <td>Аспиранты</td>
              <td>
                <input
                  type="text"
                  value={data.phdStudents1}
                  onChange={(e) => updateData('phdStudents1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.phdStudents2}
                  onChange={(e) => updateData('phdStudents2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.phdStudentsTotal}
                  onChange={(e) => updateData('phdStudentsTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>1.4</td>
              <td>Студенты</td>
              <td>
                <input
                  type="text"
                  value={data.student1}
                  onChange={(e) => updateData('student1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.student2}
                  onChange={(e) => updateData('student2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.studentTotal}
                  onChange={(e) => updateData('studentTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>2.</td>
              <td>Оборудование (приобретение / модернизация)</td>
              <td>
                <input
                  type="text"
                  value={data.hardware1}
                  onChange={(e) => updateData('hardware1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.hardware2}
                  onChange={(e) => updateData('hardware2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.hardwareTotal}
                  onChange={(e) => updateData('hardwareTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>3.</td>
              <td>Расходные материалы и комплектующие (программное обеспечение, лицензии)</td>
              <td>
                <input
                  type="text"
                  value={data.software1}
                  onChange={(e) => updateData('software1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.software2}
                  onChange={(e) => updateData('software2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.softwareTotal}
                  onChange={(e) => updateData('softwareTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>4.</td>
              <td>Командировки</td>
              <td>
                <input
                  type="text"
                  value={data.businessTrip1}
                  onChange={(e) => updateData('businessTrip1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.businessTrip2}
                  onChange={(e) => updateData('businessTrip2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.businessTripTotal}
                  onChange={(e) => updateData('businessTripTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>5.</td>
              <td>Научно-технические услуги / работы сторонних организаций (расходы на публикации)</td>
              <td>
                <input
                  type="text"
                  value={data.outsource1}
                  onChange={(e) => updateData('outsource1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.outsource2}
                  onChange={(e) => updateData('outsource2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.outsourceTotal}
                  onChange={(e) => updateData('outsourceTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>6.</td>
              <td>Прочие расходы, непосредственно связанные с выполняемым проектом</td>
              <td>
                <input
                  type="text"
                  value={data.otherExpenses1}
                  onChange={(e) => updateData('otherExpenses1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.otherExpenses2}
                  onChange={(e) => updateData('otherExpenses2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.otherExpensesTotal}
                  onChange={(e) => updateData('otherExpensesTotal', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            
            <tr>
              <td>7.</td>
              <td><strong>Итого:</strong></td>
              <td>
                <input
                  type="text"
                  value={data.total1}
                  onChange={(e) => updateData('total1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.total2}
                  onChange={(e) => updateData('total2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.total3}
                  onChange={(e) => updateData('total3', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="d-flex justify-content-between mt-4">
        <button type="button" onClick={prevPage} className="btn btn-primary">
          Назад
        </button>
        <button type="submit" onClick={onSubmit} className="btn btn-success">
          Отправить заявку
        </button>
      </div>
    </div>
  );
};