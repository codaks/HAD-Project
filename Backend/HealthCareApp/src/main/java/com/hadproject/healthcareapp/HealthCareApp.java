package com.hadproject.healthcareapp;

import com.hadproject.healthcareapp.Courses.Courses;
import com.hadproject.healthcareapp.Courses.CoursesRepositry;
import com.hadproject.healthcareapp.auth.AuthenticationService;
import com.hadproject.healthcareapp.auth.RegisterRequest;
import com.hadproject.healthcareapp.department.Department;
import com.hadproject.healthcareapp.department.DepartmentRepository;
import com.hadproject.healthcareapp.employee.Employee;
import com.hadproject.healthcareapp.employee.EmployeeRepository;
import com.hadproject.healthcareapp.user.Role;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class HealthCareApp {

	public static void main(String[] args) {
		SpringApplication.run(HealthCareApp.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			UserRepository userRepository,
			DepartmentRepository departmentRepository,

			EmployeeRepository employeeRepository,
			CoursesRepositry coursesRepositry,
			AuthenticationService authService
	) {

		return args -> {

			try {

				//Create departments
				Department department1 = Department.builder().name("CSE").capacity(50).build();
				Department department2 = Department.builder().name("ESE").capacity(30).build();

				departmentRepository.save(department1);
				departmentRepository.save(department2);

				// Create users

				var user1 = RegisterRequest.builder()
						.firstname("Chitransh")
						.lastname("Kulshrestha")
						.email("chitransh.kulshrestha@iiitb.ac.in")
						.password("1234")
						.role(Role.EMPLOYEE).build();



				authService.register(user1);

				User user11 = userRepository.findById(1).orElse(null);

				if(user11 != null ) {

					Employee employee1 = Employee.builder().title("Professor").photographPath("/path/to/photo3.jpg").user(user11).department(department1).first_name("Chitransh").last_name("Kulshrestha").email("chitransh.kulshrestha@iiitb.ac.in").build();

					employeeRepository.save(employee1);



					Courses course11 = Courses.builder().employee(employee1).course_code("CS101").capcity("100").credits("4").name("NO SQL").term("Jan-Juy").year("").year("2023-24").description("NoSQL, short for Not Only SQL, refers to a class of database management systems (DBMS) that deviate from the traditional relational database model. Unlike traditional SQL databases, NoSQL databases are designed to handle a variety of data types and structures, offering flexibility, scalability, and high performance in managing vast amounts of unstructured or semi-structured data.").build();
					Courses course12 = Courses.builder().employee(employee1).course_code("AI101").capcity("100").credits("4").name("Machine Learning").term("Jan-Juy").year("2023-24").description("Machine Learning (ML) is a branch of artificial intelligence (AI) that involves the development of algorithms and models that enable computers to learn and improve from experience without being explicitly programmed. The primary goal of machine learning is to create systems that can autonomously learn from data and make predictions or decisions based on that learning.").build();
					Courses course13 = Courses.builder().employee(employee1).course_code("CS102").capcity("100").credits("4").name("ESD").term("").year("Jan-Juy").year("2023-24").description("Enterprise Software Development refers to the process of creating software applications specifically designed to meet the needs of large-scale organizations or businesses. These applications are developed to support complex business processes, improve efficiency, streamline operations, and facilitate communication within and between different departments or branches of an enterprise.").build();
					Courses course14 = Courses.builder().employee(employee1).course_code("CS103").capcity("100").credits("4").name("DBMS").term("Jan-Juy").year("July-Dec").year("2023-24").description("NoSQL, short for Not Only SQL, refers to a class of database management systems (DBMS) that deviate from the traditional relational database model. Unlike traditional SQL databases, NoSQL databases are designed to handle a variety of data types and structures, offering flexibility, scalability, and high performance in managing vast amounts of unstructured or semi-structured data.").build();
					Courses course15 = Courses.builder().employee(employee1).course_code("AI104").capcity("100").credits("4").name("Maths For Machine Learning").term("Jan-Juy").year("2023-24").description("Machine Learning (ML) is a branch of artificial intelligence (AI) that involves the development of algorithms and models that enable computers to learn and improve from experience without being explicitly programmed. The primary goal of machine learning is to create systems that can autonomously learn from data and make predictions or decisions based on that learning.").build();
					Courses course16 = Courses.builder().employee(employee1).course_code("AI105").capcity("100").credits("4").name("Natural Language Processing").term("Jan-Juy").year("2023-24").description("Enterprise Software Development refers to the process of creating software applications specifically designed to meet the needs of large-scale organizations or businesses. These applications are developed to support complex business processes, improve efficiency, streamline operations, and facilitate communication within and between different departments or branches of an enterprise.").build();

					coursesRepositry.save(course11);

				}


				// Save employees
				// (Remember to save employeeSalary entries if needed)


			}
			catch (Exception ex) {
				ex.printStackTrace();
			}
		};
	}
}
