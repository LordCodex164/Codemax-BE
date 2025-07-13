import mongoose, { Schema, model, Document } from "mongoose";

// Revenue subdocument
const ProjectRevenueSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  unit: { type: String, required: true },
});

// Cost subdocument
const ProjectCostSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  unit: { type: String, required: true },
});

const ProjectSchema = new Schema(
  {
    company_name: { type: String, required: true },
    job_number: { type: String, required: true },
    service_type: { type: String, required: true },
    // volume: { type: Number, required: true },
    // container_type: { type: String, required: true },
    // container_size: { type: String, required: true },
    // status: { type: String, required: true },
    // currency: { type: String, required: true },
    // subtotal_revenue: { type: Number, required: true },
    // total_revenue: { type: Number, required: true },
    // vat: { type: Number, required: true },
    // subtotal_cost: { type: Number, required: true },
    // total_cost: { type: Number, required: true },
    // project_revenue: { type: [ProjectRevenueSchema], default: [] },
    // project_cost: { type: [ProjectCostSchema], default: [] },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export const ProjectModel = mongoose.model("Project", ProjectSchema);
