package org.vulzed.backendtut;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DbLoader implements CommandLineRunner {
    private final EmployeeRepository repository;
    @Autowired // <3>
    public DbLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception { // <4>
        this.repository.save(new Employee("Iiro", "Polso", "Creator"));
    }
}
