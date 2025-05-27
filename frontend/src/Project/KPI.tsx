// KPIPage.tsx

import type { ProjectData } from "./project";


interface KPIPageProps {
  data: ProjectData;
  updateData: (field: keyof ProjectData, value: unknown) => void;
  prevPage: () => void;
  nextPage: () => void;
}

export const KPIPage = ({ data, updateData, prevPage, nextPage }: KPIPageProps) => {
  return (
    <div className="page-container">
      <h2>Форма 3. Плановые ключевые показатели эффективности проекта</h2>
      
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>№ п/п</th>
              <th>КПЭ</th>
              <th>Единицы измерения</th>
              <th>1 год</th>
              <th>2 год</th>
              <th>Комментарий руководителя</th>
            </tr>
          </thead>
          <tbody>
            {/* Научная работа */}
            <tr>
              <td>1.</td>
              <td>КПЭ-1 Публикация статей в журналах WoS/Scopus</td>
              <td>статья</td>
              <td>
                <input
                  type="text"
                  value={data.numberOfArticles1}
                  onChange={(e) => updateData('numberOfArticles1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.numberOfArticles2}
                  onChange={(e) => updateData('numberOfArticles2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnArticles}
                  onChange={(e) => updateData('commentsOnArticles', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>2.</td>
              <td>КПЭ-2 Привлечение внешнего финансирования</td>
              <td>Тыс. руб.</td>
              <td>
                <input
                  type="text"
                  value={data.moneyQuantity1}
                  onChange={(e) => updateData('moneyQuantity1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.moneyQuantity2}
                  onChange={(e) => updateData('moneyQuantity2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnMoney}
                  onChange={(e) => updateData('commentsOnMoney', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>3.</td>
              <td>КПЭ-3 Апробация результатов НИР/НИОКР на международных НТМ</td>
              <td>Участие с публикацией</td>
              <td>
                <input
                  type="text"
                  value={data.numberOfParticipation1}
                  onChange={(e) => updateData('numberOfParticipation1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.numberOfParticipation2}
                  onChange={(e) => updateData('numberOfParticipation2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnPublicationEntering}
                  onChange={(e) => updateData('commentsOnPublicationEntering', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>4.</td>
              <td>КПЭ-4 Подача заявки на регистрацию РИД</td>
              <td>Заявка на регистрацию</td>
              <td>
                <input
                  type="text"
                  value={data.applicationRegistration1}
                  onChange={(e) => updateData('applicationRegistration1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.applicationRegistration2}
                  onChange={(e) => updateData('applicationRegistration2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnApplicationRegistration}
                  onChange={(e) => updateData('commentsOnApplicationRegistration', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>5.</td>
              <td>КПЭ-5 Зарегистрированные РИД</td>
              <td>Регистрация РИД</td>
              <td>
                <input
                  type="text"
                  value={data.RgdRegistration1}
                  onChange={(e) => updateData('RgdRegistration1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.RgdRegistration2}
                  onChange={(e) => updateData('RgdRegistration2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnRgd}
                  onChange={(e) => updateData('commentsOnRgd', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>6.</td>
              <td>
                Подготовка заявки на участие в следующем этапе Системы грантовой поддержки РУДН 
                (в случае объявления конкурса не позднее чем за 1 месяц до даты окончания реализации проекта)
              </td>
              <td>заявка</td>
              <td>
                <input
                  type="text"
                  value={data.numberOfApplications1}
                  onChange={(e) => updateData('numberOfApplications1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.numberOfApplications2}
                  onChange={(e) => updateData('numberOfApplications2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnNumberOfApplications}
                  onChange={(e) => updateData('commentsOnNumberOfApplications', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            {/* Кадровый потенциал */}
            <tr>
              <td colSpan={6} className="text-center fw-bold">Кадровый потенциал</td>
            </tr>

            <tr>
              <td>8.</td>
              <td>Состав научного коллектива</td>
              <td>чел.</td>
              <td>
                <input
                  type="text"
                  value={data.numberOfSciMem1}
                  onChange={(e) => updateData('numberOfSciMem1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.numberOfSciMem2}
                  onChange={(e) => updateData('numberOfSciMem2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnNumberOfSciMem}
                  onChange={(e) => updateData('commentsOnNumberOfSciMem', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>9.</td>
              <td>Исследователи в возрасте до 39 лет включительно</td>
              <td>чел.</td>
              <td>
                <input
                  type="text"
                  value={data.numberOfMembersTill39_1}
                  onChange={(e) => updateData('numberOfMembersTill39_1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.numberOfMembersTill39_2}
                  onChange={(e) => updateData('numberOfMembersTill39_2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnNumberOfMembersTill39}
                  onChange={(e) => updateData('commentsOnNumberOfMembersTill39', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>

            <tr>
              <td>10.</td>
              <td>Студенты и/или аспиранты в составе научного коллектива</td>
              <td>чел.</td>
              <td>
                <input
                  type="text"
                  value={data.numberOfStudents1}
                  onChange={(e) => updateData('numberOfStudents1', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.numberOfStudents2}
                  onChange={(e) => updateData('numberOfStudents2', e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.commentsOnNumbersOfStudents}
                  onChange={(e) => updateData('commentsOnNumbersOfStudents', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
          <label className="form-label">Руководитель проекта</label>
                <input
                  type="text"
                  value={data.projectSupervisor}
                  onChange={(e) => updateData('projectSupervisor', e.target.value)}
                  className="form-control"
                />
                          <label className="form-label">Дата</label>
            <input
                  type="date"
                  value={data.date}
                  onChange={(e) => updateData('date', e.target.value)}
                  className="form-control"
                />
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button type="button" onClick={prevPage} className="btn btn-primary">
          Назад
        </button>
        <button type="button" onClick={nextPage} className="btn btn-primary">
          Далее
        </button>
      </div>
    </div>
  );
};