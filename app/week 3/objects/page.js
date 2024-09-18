

export default function ObjectsPage(){
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

    let {studentName, studentAge,address:{city}, schedule:[,,webDev2]} = studentOne;
    return(
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name:{studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>Web dev 2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>

            <h2>Destructuring</h2>
            <p>Name: {studentName}</p>
            <p>Age: {studentAge}</p>
            <p>City: {city}</p>
            <p>Web Dev 2: {webDev2}</p>
        </main>
    );
}