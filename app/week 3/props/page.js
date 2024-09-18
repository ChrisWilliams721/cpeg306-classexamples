
import StudentComponent from "./student-component";
import StudentComponentNew from "./student-component-new";

export default function PropsPage() {
    let studentOne = {
        studentName: "Chris",
        studentAge: 22,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456","CPRG306"],
        address: {
            line1: "123 main street",
            city: "calgary",
            province: "AB",
        },
    }
    let studentTwo = {
        studentName: "Alice",
        studentAge: 23,
        address: {
            city: "Calgry",
            province: "AB"
        }
    }
    return(
        <main>
            <StudentComponent sName="Kevin" sAge="21" />
            <StudentComponent sName={studentOne.studentName}/>
            <StudentComponentNew studentObj={studentOne}/>
            <StudentComponent studentObj={studentTwo}/>
        </main>
    );
}