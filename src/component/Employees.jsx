import "./Employees.css";
import Employee from "./Employee";

function Employees(props) {
  const employees = [
    {
      fname: "Imię Nazwisko",
      department: "[ dział ]",
      description:
        "Proin sed turpis cursus, eleifend nulla at, tristique magna. Ut lobortis magna nec nunc scelerisque, non finibus erat accumsan. Phasellus commodo turpis in interdum volutpat. Nunc quis efficitur est. Aliquam a massa nec quam mattis tincidunt. Cras molestie elit ut tortor volutpat accumsan. Duis et rhoncus augue. Nullam tincidunt a elit in feugiat.",
      fotoUrl: "foto1.jpg",
      fotoAlt: "zdjęcie",
    },
  ];

  return (
    <>
      {employees.map(({ fname, department, description, fotoUrl, fotoAlt }) => {
        return (
          <Employee
            fname={fname}
            department={department}
            description={description}
            fotoUrl={fotoUrl}
            fotoAlt={fotoAlt}
          />
        );
      })}
    </>
  );
}

export default Employees;
