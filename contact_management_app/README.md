#Contact Management App with Charts and Maps
This is a contact management app built using ReactJS, TypeScript, TailwindCSS, React Router v6, React Query aka TanstackQuery, and Redux. The app includes a dashboard with charts and maps that display COVID-19 data for different countries.

#Installation and Setup
To run this app, follow these steps:

Clone this repository: git clone https://github.com/your-username/contact-management-app.git
Install the dependencies: npm install
Start the app: npm start
The app should open in your default browser at http://localhost:3000/.

#Pages and Functionality
The app has two main pages:

#Contacts
This page allows you to manage your contacts. You can add a new contact by filling out the form, and the contact will be added to the list. You can also edit or delete an existing contact. Clicking on a contact's name will take you to the contact details page.

#Charts and Maps
This page displays COVID-19 data for different countries. It includes a line graph showing the cases fluctuations over time and a map with markers that indicate the country name, total number of active, recovered cases, and deaths in that particular country as a popup.

#APIs Used
The app uses the following APIs to fetch data:

World wide data of cases: https://disease.sh/v3/covid-19/all
Country Specific data of cases: https://disease.sh/v3/covid-19/countries
Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all
#Technologies Used
The following technologies were used to build this app:

ReactJS
TypeScript
TailwindCSS
React Router v6
React Query
Redux
#Conclusion
This app is responsive and well-structured, making it easy to maintain and build upon in the future. If you have any questions or feedback, please feel free to contact us. Thank you for using our app!
