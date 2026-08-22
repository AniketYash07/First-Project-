const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema(
  {
    // User who submitted the complaint
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    title: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    latitude: {
      type: Number
    },

    longitude: {
      type: Number
    },

    status: {
      type: String,
      default: 'Pending'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Complaint', complaintSchema)