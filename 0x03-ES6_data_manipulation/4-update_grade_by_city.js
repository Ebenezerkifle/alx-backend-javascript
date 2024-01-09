export default function updateStudentGradeByCity(list, city, newGrades) {
  const filtered = list.filter((e) => {
    if(e.location == city) {
      newGrades.filter((grade) => grade.studentId == e.id);
    }
  });
  return filtered;
}