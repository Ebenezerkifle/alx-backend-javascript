export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((studnets) => studnets.location == city).map((student) => {
    const myGrade = newGrades.filter((grade) => grade.studentId == student.id)[0];
    student['grade'] = (myGrade != undefined && myGrade.grade != undefined) ? myGrade.grade : 'N/A';
    return student;
  });
}
