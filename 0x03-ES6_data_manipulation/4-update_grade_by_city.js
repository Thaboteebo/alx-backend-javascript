export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
	return listStudents
	.filter(({ location }) => location === targetLocation)
	.map((obj) => {
		const xtargetNewGrade = newGrades.filter(({ studentID }) => studentID === obj.id);
		const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0]: {};
		return { ...obj, grade };
	});
}
