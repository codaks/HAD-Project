package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.appointment.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
