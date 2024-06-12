package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AppointmentController {
	
	@PostMapping("/save" )
	public AppointmentTable dosave(@RequestBody AppointmentTable s) {
		AppointmentTableDb da = new AppointmentTableDb();
		AppointmentTable st=  da.save(s);

		return st;
	}

List<AppointmentTable> pp=new ArrayList<>();
	
	@GetMapping("/all")
	public List<AppointmentTable> m2() {
		AppointmentTableDb da = new AppointmentTableDb();
		pp = da.allstudent();

		return pp;
	}
	
	@GetMapping("/{id}/{password}")
	public List<AppointmentTable> m3(@PathVariable int id,@PathVariable String password) {
		AppointmentTableDb da = new AppointmentTableDb();
//		pp = da.allstudent();
		pp = da.searchById(id,password);
		return pp;
	}
}
