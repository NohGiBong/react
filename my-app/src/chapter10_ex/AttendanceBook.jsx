const students = [
    {
        id: 1,
        name: "Tom",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {
                students.map( (student, index) => {
                    // 값을 그대로 key로 활용하는 경우
                    // return <li key={student.name}>{student.name}</li>;
                    // id를 키값으로 활용
                    // return <li key={student.id}>{student.name}</li>;
                    // 배열의 인덱스를 키값으로
                    // return <li key={index}>{student.name}</li>;
                    // 포맷팅 된 문자열을 키값으로 사용
                    return <li key={`student-id-${student.id}`}>{student.name}</li>;
                })
            }
        </ul>
    );
}

export default AttendanceBook;