// Bio
var bio = {
	"name" : "Vartika Bhati",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "999-888-8888",
		"email" : "vartika.bhati@gmail.com",
		"github" : "vbhati",
		"twitter" : "@vbhati",
		"location" : "Santa Clara, CA, USA"
	},
	"welcomeMessage" : "Seeking a full-time position in the area of Fontend Web Development.",
	"skills" : ["JavaScript" ,"HTML/HTML5","CSS","JSON","Java","Spring","Hibernate","MySql"],
	"biopic" : "images/me.jpg",
	"locationPic" : "images/santaclara.jpg"
};

bio.display = function() {
	var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var i = 0 ; i < bio.skills.length ; i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#header").append(formattedSkill);
		}
	}

	//Contact infor for footer
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);
};

//Education
var education = {
	"schools" : [
		{
			"name" : "San Jose State University",
			"location" : "San Jose, CA, USA",
			"degree" : "Masters",
			"majors" : "Software Engineering",
			"dates" : "December, 2008",
			"url" : "http://cmpe.sjsu.edu/",
			"schoolPic": "images/sjsu.jpg"
		},
		{
			"name" : "Rajasthan University",
			"location" : "Rajasthan, India",
			"degree" : "Post Graduate",
			"majors" : "Computer Applications",
			"dates" : "December, 2006",
			"url" : "http://www.uniraj.ac.in/",
			"schoolPic": "images/rajuniversity.jpg"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Responsive Web Design",
			"school" : "Udacity",
			"date" : "February, 2015",
			"url" : "https://www.udacity.com/course/ud893"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "February, 2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : "February, 2015",
			"url" : "https://www.udacity.com/course/ud804"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"date" : "February, 2015",
			"url" : "https://www.udacity.com/course/ud245"
		}
	]
};

education.display = function() {
	for(var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedurl = HTMLschoolName.replace("#",education.schools[school].url);
		var formattedSchoolName = formattedurl.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedTitle = formattedSchoolName + formattedDegree;
		var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedLocation);
	}

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for(var onlinecourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitleURL = HTMLonlineTitle.replace("#",education.onlineCourses[onlinecourse].url);
			var formattedName = formattedTitleURL.replace("%data%",education.onlineCourses[onlinecourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlinecourse].school);
			var formattedTitle = formattedName + formattedSchool;
			var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[onlinecourse].date);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlinecourse].url);
			var formattedHref = formattedURL.replace("#",education.onlineCourses[onlinecourse].url);

			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedHref);
		}
	}
};

//Work Experience
var work = {
	"jobs" : [
	{
		"employer" : "E*Trade Financial",
		"title" : "Staff Software Engineer",
		"location" : "Menlo Park, CA, USA",
		"dates" : "August, 2009 - March, 2014",
		"description" : "Worked as a Software Engineer in the area of Reporting for Equity Edge Online (EEO) a Stock Plan Administration application.",
		"employerURL" : "https://us.etrade.com/e/t/corporateservices",
		"employerPic" : "images/etrade.jpg"
	}
]};

work.display = function() {
	for(var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployerUrl = HTMLworkEmployer.replace("#",work.jobs[job].employerURL);
		var formattedEmployer = formattedEmployerUrl.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedTitle = formattedEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

//Projects
var projects = {
	"projects" : [
	{
		"title" : "Plan-It & Go",
		"dates" : "2014",
		"description" : "Designed a website Plan-It & Go that allows user to search for upcoming events and adventures in a given location. It provides different categories to search for, e.g. Family, Friends, Luxury, etc.",
		"images" : ["images/planitandgo1.jpg","images/planitandgo2.jpg"],
		"url" : "http://plan-itandgo.appspot.com/index.html"
	},
	{
		"title" : "Grant Level Taxation",
		"dates" : "2013-2014",
		"description" : "Designed and developed new view for Dividend Summary report that lists the detailed dividend calculation for grants.",
		"images" : [],
		"url" : "#"
	},
	{
		"title" : "Report Framework Performance",
		"dates" : "2013",
		"description" : "Improved Report Framework performance by splitting table and index creation logic when using SQL.",
		"images" : [],
		"url" : "#"
	},
	{
		"title" : "Performance Shares",
		"dates" : "2012",
		"description" : "Modified existing EEO reports to incorporate new feature related to Performance Shares.",
		"images" : [],
		"url" : "#"
	},
	{
		"title" : "Report Template",
		"dates" : "2011-2012",
		"description" : "Designed and developed Report Template functionality that allows user to customize  their custom and standard reports.",
		"images" : [],
		"url" : "#"
	},
	{
		"title" : "Production Support",
		"dates" : "2010-2014",
		"description" : "Handled and resolved numerous production issues/escalations.",
		"images" : [],
		"url" : "#"
	},
	{
		"title" : "Saved Filters",
		"dates" : "2009-2010",
		"description" : "Implemented “Saved Filters” feature for EEO as part of New Hire Training that allows user to customize and save the searches. Utilized JavaScript, AJAX and HTML markup to create, edit and manage filters.",
		"images" : [],
		"url" : "#"
	},
	{
		"title" : "Minor Projects",
		"dates" : "2010-2014",
		"description" : "Worked on multiple minor porjects: WAO Report Enhancement, Client File Automation, Logging Enhancement and MetaData Enhancement.",
		"images" : [],
		"url" : "#"
	}
]};


projects.display = function() {
	for(var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedURL = HTMLprojectTitle.replace("#",projects.projects[project].url);
		var formattedProjectTitle = formattedURL.replace("%data%",projects.projects[project].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(var i = 0 ; i < projects.projects[project].images.length ; i++) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[i]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

//Calling display to display data on web page.
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

