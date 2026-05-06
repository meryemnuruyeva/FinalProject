import { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function CreateDesign() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    emotion: '',
    material: '',
    images: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ title: '', description: '', emotion: '', material: '', images: null });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="create-page">
      <div className="create-header">
        <div className="container">
          <h1>Create Your Design</h1>
          <p>Share your unique fashion story with the world</p>
        </div>
      </div>

      <div className="container create-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <Input
              label="Design Title"
              name="title"
              placeholder="Enter your design name"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <Input
              label="Emotion"
              name="emotion"
              placeholder="What emotion does this express?"
              value={formData.emotion}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Description"
            name="description"
            placeholder="Tell us about your design..."
            value={formData.description}
            onChange={handleChange}
            required
          />

          <Input
            label="Material"
            name="material"
            placeholder="What materials are used?"
            value={formData.material}
            onChange={handleChange}
            required
          />

          <div className="form-group">
            <label htmlFor="images">Upload Images</label>
            <div className="file-upload">
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                className="file-input"
              />
              <span className="file-label">Click to upload or drag files</span>
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg">
            Create Design
          </Button>

          {submitted && (
            <div className="success-message">
              ✓ Design created successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
