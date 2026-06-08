import React from "react";
import {
  Upload,
  ArrowLeft,
  ArrowRight,
  ImageIcon,
  FileText,
} from "lucide-react";

const MediaStep = ({ formData, updateField, nextStep, prevStep }) => {
  const handleCoverImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    updateField("coverImage", file);

    updateField("coverPreview", URL.createObjectURL(file));
  };

  const handleGalleryImages = (e) => {
    const files = Array.from(e.target.files);

    updateField("galleryImages", files);

    const previews = files.map((file) => URL.createObjectURL(file));

    updateField("galleryPreviews", previews);
  };

  const handleDocuments = (e) => {
    const files = Array.from(e.target.files);

    updateField("documents", files);
  };

  const handleNext = () => {
    if (!formData.coverImage) {
      alert("Please upload campaign cover image");
      return;
    }

    nextStep();
  };

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Media & Documents</h2>

        <p className="text-slate-500 mt-2">
          Upload campaign images and supporting documents for verification.
        </p>
      </div>

      <div className="space-y-8">
        {/* Cover Image */}

        <div>
          <label className="block text-sm font-semibold mb-3">
            Campaign Cover Image *
          </label>

          <label
            className="
              border-2
              border-dashed
              border-orange-300
              rounded-3xl
              p-8
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              hover:bg-orange-50
              transition
            "
          >
            <Upload size={40} className="text-orange-500" />

            <p className="mt-4 font-medium">Upload Cover Image</p>

            <span className="text-sm text-gray-500">JPG, PNG (Max 5MB)</span>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleCoverImage}
            />
          </label>

          {formData.coverPreview && (
            <div className="mt-5">
              <img
                src={formData.coverPreview}
                alt="Preview"
                className="
                  w-full
                  md:w-80
                  h-52
                  object-cover
                  rounded-2xl
                  shadow-md
                "
              />
            </div>
          )}
        </div>

        {/* Gallery Images */}

        <div>
          <label className="block text-sm font-semibold mb-3">
            Gallery Images
          </label>

          <label
            className="
              border-2
              border-dashed
              border-gray-300
              rounded-3xl
              p-8
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
            "
          >
            <ImageIcon size={38} className="text-orange-500" />

            <p className="mt-4 font-medium">Upload Multiple Images</p>

            <input
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleGalleryImages}
            />
          </label>

          {formData.galleryPreviews?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {formData.galleryPreviews.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Gallery"
                  className="
                      h-28
                      w-full
                      object-cover
                      rounded-xl
                    "
                />
              ))}
            </div>
          )}
        </div>

        {/* Documents */}

        <div>
          <label className="block text-sm font-semibold mb-3">
            Supporting Documents
          </label>

          <label
            className="
              border-2
              border-dashed
              border-gray-300
              rounded-3xl
              p-8
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
            "
          >
            <FileText size={38} className="text-orange-500" />

            <p className="mt-4 font-medium">Upload Documents</p>

            <span className="text-sm text-gray-500">PDF, JPG, PNG</span>

            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              hidden
              onChange={handleDocuments}
            />
          </label>

          {formData.documents?.length > 0 && (
            <div className="mt-5 space-y-3">
              {formData.documents.map((file, index) => (
                <div
                  key={index}
                  className="
                      bg-gray-50
                      border
                      rounded-xl
                      p-3
                      flex
                      items-center
                      justify-between
                    "
                >
                  <span className="text-sm truncate">{file.name}</span>

                  <span className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)}
                    MB
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upload Guidelines */}

        <div
          className="
            bg-orange-50
            border
            border-orange-100
            rounded-2xl
            p-5
          "
        >
          <h4 className="font-semibold mb-3">Upload Guidelines</h4>

          <ul className="space-y-2 text-sm text-slate-600">
            <li>✓ Upload a clear campaign cover image</li>

            <li>✓ Add supporting photos if available</li>

            <li>✓ Upload medical reports for medical campaigns</li>

            <li>✓ Upload temple permissions for temple renovation campaigns</li>

            <li>✓ Upload NGO registration if applicable</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={prevStep}
          className="
            border
            border-gray-300
            px-6
            py-3
            rounded-xl
            flex
            items-center
            gap-2
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-8
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            font-semibold
          "
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default MediaStep;
