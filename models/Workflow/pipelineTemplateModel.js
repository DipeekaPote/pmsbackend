const mongoose = require("mongoose");



const stageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Stage name is required"],
  },
  conditions: {
    type: String, // This can be of any type depending on your specific requirements
  },
  automations: {
    type: String, // This can be of any type depending on your specific requirements
  },
  automove:{
    type: Boolean, 
  }
});


const pipelineSchema = new mongoose.Schema(
  {
    pipelineName: {
      type: String,
      required: [true, "pipelineName is required"],
     },

     availableto: [{
      type: Array,
      type: mongoose.Schema.Types.ObjectId, ref: 'user',
      required: [true, 'Available to are required'],
     }],

     sortjobsby: [{
      type: Array,
      enum: ["Time in stage, oldest first"],
      required: [true, 'Available to are required'],
     }],

    accountId: {
     type: Boolean,
     default: false, // Provide a default value if needed
    },

    description: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    duedate: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    accounttags: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    priority: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    assignees: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    name: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    startdate: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    stages: [stageSchema],

    active: {
      type: Boolean,
      default: true, // Provide a default value if needed
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("pipeline", pipelineSchema);
