1. User Login System

    Objective: Create a login system where users enter a username and password. Based on the authentication, use a ternary operator to display either a welcome message or an error message.
    Example:

    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    let message = (username === "user" && password === "pass") ? "Welcome!" : "Invalid credentials.";
    console.log(message);

2. Simple Voting System

    Objective: Build a voting system where users are given options to vote for candidates. Use a ternary operator to check if the user is eligible to vote (e.g., age greater than 18) and print a corresponding message.
    Example:

    let age = 20;
    let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
    console.log(eligibility);

3. Temperature Conversion (Celsius to Fahrenheit)

    Objective: Implement a simple app to convert temperatures. Depending on the input unit, use a ternary operator to decide the conversion.
    Example:

    let temperature = 30;
    let unit = 'C'; // 'C' for Celsius, 'F' for Fahrenheit
    let convertedTemp = (unit === 'C') ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;
    console.log(`${temperature}°${unit} is ${convertedTemp}`);

4. Simple E-commerce Discount Calculator

    Objective: Calculate discounts based on user membership status (e.g., premium or regular). Use ternary operators to apply different discount rates.
    Example:

    let price = 100;
    let isPremium = true;
    let discount = isPremium ? 0.20 : 0.05;  // 20% for premium members, 5% for regular
    let finalPrice = price - (price * discount);
    console.log(`Final Price: $${finalPrice}`);

5. Bank Balance Check

    Objective: Create a simple application that checks the bank balance and determines if the user can afford a purchase. Use ternary operators to display an appropriate message based on the balance.
    Example:

    let balance = 50;
    let purchaseAmount = 40;
    let canAfford = (balance >= purchaseAmount) ? "You can afford the purchase!" : "Insufficient funds.";
    console.log(canAfford);

6. Quiz Application

    Objective: Build a simple quiz where each answer is scored. Use a ternary operator to check if the answer is correct and increment the score.
    Example:

    let answer = "B";
    let score = (answer === "B") ? 1 : 0;
    console.log(`Your score: ${score}`);

7. Grade Calculator

    Objective: Develop a grade calculation tool where grades are assigned based on the score. Use ternary operators to assign a grade based on score thresholds.
    Example:

    let score = 85;
    let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "F";
    console.log(`Your grade is: ${grade}`);

8. Light or Dark Mode Toggle

    Objective: Implement a website with a light/dark mode toggle button. Use a ternary operator to switch between styles.
    Example:

    let isDarkMode = false;
    let mode = isDarkMode ? "Dark Mode" : "Light Mode";
    console.log(`The website is in ${mode}`);

9. Age-based Pricing

    Objective: Create an app that gives different prices based on the user’s age (e.g., child, adult, senior). Use ternary operators for the logic.
    Example:

    let age = 65;
    let price = (age < 12) ? 5 : (age > 60) ? 7 : 10;  // Child: $5, Senior: $7, Adult: $10
    console.log(`The ticket price is: $${price}`);

10. Simple Alarm System

    Objective: Design a basic alarm system where the alarm goes off based on time or security status. Use a ternary operator to check the conditions.
    Example:

    let time = 6;  // Time in hours
    let isSecurityActive = true;
    let alarmStatus = (time >= 22 || !isSecurityActive) ? "Alarm is ON" : "Alarm is OFF";
    console.log(alarmStatus);

These projects help reinforce your understanding of the ternary operator and demonstrate how it can be used in real-world applications.