import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  username: {type: String},
  occupation: {type: String}
}, { timestamps: true });

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

export default Testimonial;
