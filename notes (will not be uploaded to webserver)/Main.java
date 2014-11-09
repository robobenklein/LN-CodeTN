// *****************************************************************
// Main.java
//
// This program calculates the feasibility of alternative energy,
// the initial invest, payoff time, and money saved a month. More
// information can be found in the original document.
// *****************************************************************
import java.util.Scanner;
import java.text.DecimalFormat;
import java.text.NumberFormat;

public class Main 
{
	public static void main (String[] args)
	{
		// Create program-wide variables.
		double savings, ecost;
		boolean reloop = true;
		String input;

		// Begin creating variables for wind energy choice.
		double windspeed, winitial, wfinal, windsavings;
		double windpayoff = 0;
		final double RHO = 1.2754;
		
		// Begin creating variables for solar energy choice.
		double sinitial, sunlight, width, length, sfinal, solarsavings;
		double solarpayoff = 0;
		
		// Set up strings for the scanner, decimal formatter, and currency formatter.
		Scanner scan = new Scanner(System.in);
		DecimalFormat fmt = new DecimalFormat ("0");
		DecimalFormat energy = new DecimalFormat ("0.##");
		NumberFormat money = NumberFormat.getCurrencyInstance();
		
		
		// Program runs in below while loop.  When set to false, program closes.
		while (reloop == true)
		{
			// Welcome the user, and tell them what the program does.
			System.out.println("This program will help you decide if solar or wind energy are a feasible choice for your area.\n"
							+ "Please answer a few questions to begin.\n");
			
			System.out.print("What is the cost of electricity per kilowatt hours in your area? (Enter in dollars): ");
			ecost = scan.nextDouble();
			
			// Capture the wind speed and save it as variable "windspeed"
			System.out.print("What is the average wind speed, in MPH? ");
			windspeed = scan.nextDouble();	

			System.out.print("What is the initial cost of the windmill, including installation and setup? ");
			winitial = scan.nextDouble();				
			
			System.out.print("How many hours a day of sunlight does this location get, on average? ");
			sunlight = scan.nextDouble();
			
			System.out.print("Enter the length of the area where the solar panels will be installed: (In feet) ");
			length = scan.nextDouble();
			
			System.out.print("Enter the height of the area where the solar panels will be installed: (In feet) ");
			width = scan.nextDouble();
			
			System.out.print("What is the initial cost of the solar panels, including installation and setup? ");
			sinitial = scan.nextDouble();
			
			// Begin the math for windmill calculations.
			// Convert to meters per second from MPH.
			windspeed = windspeed * 0.44704;
			
			// Solve the equation:
			wfinal = 0.5 * RHO * Math.pow(windspeed, 3);
			
			// Convert from watts to kilowatts.
			wfinal = wfinal * 0.001 * 365;
			
			// Multiply energy cost times energy generated to find savings.
			windsavings = wfinal * ecost;
			
			// Calculate payoff time
			windpayoff = winitial / windsavings;
			// End the math for windmill calculations.	
			
			// Begin the math for solar calculations.
			// Calculate energy produced in watts.
			sfinal = (length * width * 10 * sunlight) * 0.78; // "10" is the watts per square foot, and "0.78" removes 22% in inefficiency. 
	
			// Convert from watts to kilowatts.
			sfinal = sfinal * 0.001 * 365;
			
			// Multiply energy cost times energy generated to find savings.
			solarsavings = sfinal * ecost;
			
			// Calculate payoff time
			solarpayoff = sinitial / solarsavings;
			
			// Make some space from output.
			System.out.print("\n\n");
			
			// Which system generated more electricity?
			if (sfinal > wfinal)
			{
				System.out.println("\nSolar energy is the best choice for your home, producing " + energy.format(sfinal) + " kw/h of energy \n"
								+ "and saving you " + money.format(solarsavings) + " in one year.  It will take " + fmt.format(solarpayoff)
								+ " years to pay off the initial investment.");
			}
			
			// Which system generated more electricity?
			if (wfinal > sfinal)
			{
				System.out.println("\nWind energy is the best choice for your home, producing " + energy.format(wfinal) + " kw/h of energy \n"
								+ "and saving you " + money.format(windsavings) + " in one year. It will take " + fmt.format(windpayoff)
								+ " years to pay off the initial investment.");
			}
			
			// Prompt the user to use the calculator again.
			System.out.print("\nWould you like to reuse this calculator? Enter \"Y\" or \"N\": ");
			input = scan.next();
			
			
			// If the user enters Y, quit.
			if (input.equalsIgnoreCase("Y"))
			{
				reloop = true;
			}
			
			// If the user enters N, quit.
			else if (input.equalsIgnoreCase("N"))
			{
				reloop = false;
				System.out.println("Quitting now...");
			}

		} // End the while loop.
		
		System.out.println("\nThank you for using this calculator!");
	} // End public class loop
} // End main loop
