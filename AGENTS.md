```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure consistent, maintainable, and high-quality code for the AGENTS repository. Adherence to these principles is crucial for collaborative development and long-term project success.

**1. DRY (Don't Repeat Yourself)**

*   All functions, classes, and modules should have single, well-defined responsibilities.
*   Code should be self-contained and reusable.
*   Avoid duplicating logic across multiple files.
*   When necessary, leverage existing components or abstractions to minimize duplication.

**2. KISS (Keep It Simple, Stupid)**

*   Prioritize simplicity and readability.
*   Favor clear and concise code over complex solutions.
*   Keep functions and classes short and focused.
*   Avoid unnecessary complexity.

**3. SOLID Principles**

*   **Single Responsibility Principle:** Each class or module should have one and only one reason to change.
*   **Open/Closed Principle:** Classes and modules should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Client code should not be required to marshal to interfaces they do not use.
*   **Dependency Inversion Principle:** High-level modules should be dependent on abstractions, not concrete classes.

**4. YAGNI (You Aren't Gonna Need It)**

*   Only implement functionality that is currently required.
*   Avoid adding features or code without a clear, demonstrable need.
*   Refactor only when necessary to eliminate existing unnecessary complexity.

**5. Code Structure & Formatting**

*   **File Size Limit:** Each file must not exceed 180 lines of code.
*   **Comments:**  Provide concise, descriptive comments where necessary, but avoid overly verbose explanations.  Comments should explain *why* the code is doing something, not *what* it is doing (the code itself should be clear).
*   **Naming Conventions:** Follow established naming conventions (e.g., camelCase for variables and functions, PascalCase for classes).  Consistent naming is crucial for understanding.
*   **Indentation:** Use 2 spaces for indentation.  Do not use tabs.
*   **Whitespace:**  Use whitespace strategically to improve readability.
*   **Blank Lines:**  Use blank lines to separate logical sections of code.

**6. Testing & Coverage**

*   **Unit Tests:** All core functions and classes should have comprehensive unit tests covering all critical paths.
*   **Test Coverage:**  Aim for at least 80% code coverage.  Tools like `coverage.py` should be used to measure and track coverage.
*   **Test-Driven Development:** Prioritize writing tests *before* implementing the functionality.
*   **Test Isolation:** Each test case should focus on a single aspect of the code being tested.

**7. Production-Ready Practices**

*   **Error Handling:** Implement robust error handling to gracefully handle unexpected situations.  Log errors effectively.
*   **Logging:**  Use a logging framework consistently and effectively to track program state and events.
*   **Documentation:**  Provide clear and concise documentation, including API documentation where appropriate.
*   **Versioning:**  Use a version control system (Git) and adhere to established versioning practices.
*   **Code Reviews:** Conduct regular code reviews to ensure quality and identify potential issues.

**8.  Specific Requirements**

*   **Data Structures:** Utilize appropriate data structures for optimal performance.
*   **Algorithms:**  Choose efficient algorithms where possible.
*   **Concurrency/Parallelism:**  Consider concurrency/parallelism using appropriate techniques (e.g., threading, asynchronous programming) only when necessary and with careful consideration of potential race conditions and deadlocks.
*   **State Management:** Implement state management effectively to avoid state inconsistencies.

**9.  Code Style Guide**

*   [Link to existing coding style guide, if applicable]

**10.  Additional Notes**

*   This document is intended to be a reference, not a rigid set of rules. Adapt and refine these guidelines as needed.
*   Collaboration is key.  Communicate any challenges or concerns openly.
*   Regularly review and update these guidelines to reflect evolving best practices.

```