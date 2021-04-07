const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
	{
		cycle: {
			type: String,
			required: true,
		},
		files: {
			type: Array,
			file:{
				type: String
			}
		}
		,
		autorisation: {
			type: Boolean,
		},
		aSoutenu: {
			type: Boolean,
		},
		decisionSelection: {
			type: Boolean,
		},
		versionFinale: {
			type: Boolean,
		},
		paiement: {
			type: Boolean,
		},
		matricule: {
			type: String,
			unique: true,
		},
		academicYear: {
			type: Object,
		},
		fieldOfStudy: {
			type: Object,
		},
		name: {
			type: String,
		},
		gender: {
			type: String,
		},
		birth: {
			type: Object,
		},
		nationality: {
			type: Object,
		},
		parents: {
			type: Object,
		},
		regionOfOrigin: {
			type: Object,
		},
		universityInfo: {
			type: Object,
		},
		profession: {
			type: Object,
		},
		address: {
			type: Object,
		},
		highSchoolInfo: {
			type: Object,
		},
		universitySchoolInfo: {
			type: Object,
		},
		generalAverage: {
			type: String,
		},
		thesisDirectors: {
			type: Object,
		},
		supervisor: {
			type: Object,
		},
		researchSubject: {
			type: String,
		},

		// // PhD students
		// cycle: {
		// 	type: String,
		// },
		// files: {
		// 	type: Object,
		// },
		// autorisation: {
		// 	type: Boolean,
		// },
		// aSoutenu: {
		// 	type: Boolean,
		// },
		// versionFinale: {
		// 	type: Boolean,
		// },
		// paiement: {
		// 	type: Boolean,
		// },
		// academicYear: {
		// 	type: Object,
		// },
		// fieldOfStudy: {
		// 	type: Object,
		// },
		// name: {
		// 	type: String,
		// },
		// gender: {
		// 	type: String,
		// },
		// birth: {
		// 	type: Object,
		// },
		// nationality: {
		// 	type: Object,
		// },
		// parents: {
		// 	type: Object,
		// },
		// regionOfOrigin: {
		// 	type: Object,
		// },
		// universityInfo: {
		// 	type: Object,
		// },
		// profession: {
		// 	type: Object,
		// },
		// address: {
		// 	type: Object,
		// },
		// highSchoolInfo: {
		// 	type: Object,
		// },
		// universitySchoolInfo: {
		// 	type: Object,
		// },
		// generalAverage: {
		// 	type: Object,
		// },
		// thesisDirectors: {
		// 	type: Object,
		// },
		// supervisor: {
		// 	type: Object,
		// },
		// researchSubject: {
		// 	type: String,
		// },
	},
	{
		timestamps: true,
	}
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
