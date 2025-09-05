"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Input, {
  TextInput,
  EmailInput,
  PasswordInput,
  SearchInput,
  NumberInput,
  PhoneInput,
  URLInput,
} from "./Input";

const InputShowcase = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    search: "",
    phone: "",
    website: "",
    age: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form is valid!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-start items-start mt-24 sm:mt-10 px-6 sm:px-24 gap-12"
    >
      <div className="flex flex-col items-start text-left gap-8 max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
            Input Components
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A comprehensive collection of input components with various styles,
            sizes, and interactive states. Built for modern forms and user
            interfaces.
          </p>
        </motion.div>

        {/* Basic Input Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Input Types
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Pre-configured input components for common use cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
              required
            />
            <EmailInput
              label="Email Address"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              error={errors.password}
              required
            />
            <SearchInput
              label="Search"
              placeholder="Search anything..."
              value={formData.search}
              onChange={(e) => handleInputChange("search", e.target.value)}
            />
            <PhoneInput
              label="Phone Number"
              placeholder="+90 555 123 45 67"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            <URLInput
              label="Website"
              placeholder="https://example.com"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
            />
          </div>
        </motion.section>

        {/* Input Sizes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Input Sizes
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Three size variants to fit different layout needs and hierarchy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TextInput
              label="Small Input"
              placeholder="Small size"
              size="sm"
              helperText="This is a small input"
              readOnly
            />
            <TextInput
              label="Medium Input"
              placeholder="Medium size (default)"
              size="md"
              helperText="This is a medium input"
              readOnly
            />
            <TextInput
              label="Large Input"
              placeholder="Large size"
              size="lg"
              helperText="This is a large input"
              readOnly
            />
          </div>
        </motion.section>

        {/* Input Variants */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Input Variants
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Different visual styles for various design contexts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TextInput
              label="Default Variant"
              placeholder="Default style"
              variant="default"
              helperText="Clean default style"
              readOnly
            />
            <TextInput
              label="Filled Variant"
              placeholder="Filled style"
              variant="filled"
              helperText="Filled background style"
              readOnly
            />
            <TextInput
              label="Outlined Variant"
              placeholder="Outlined style"
              variant="outlined"
              helperText="Bold outlined style"
              readOnly
            />
          </div>
        </motion.section>

        {/* Input States */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Input States
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Different states and feedback mechanisms for user interaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="With Helper Text"
              placeholder="Enter some text"
              helperText="This is helpful information about this field"
              readOnly
            />
            <TextInput
              label="With Error"
              placeholder="This field has an error"
              error="This field is required"
              defaultValue=""
              readOnly
            />
            <TextInput
              label="Disabled Input"
              placeholder="This input is disabled"
              disabled
              defaultValue="Disabled value"
            />
            <TextInput
              label="Required Field"
              placeholder="This field is required"
              required
              helperText="This field is marked as required"
              readOnly
            />
          </div>
        </motion.section>

        {/* Custom Icons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Custom Icons
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Add custom icons to enhance input functionality and meaning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Input
              label="Location"
              placeholder="Enter your location"
              leftIcon="hugeicons:location-01"
              readOnly
            />
            <Input
              label="Company"
              placeholder="Company name"
              leftIcon="hugeicons:building-01"
              readOnly
            />
            <Input
              label="Birthday"
              placeholder="Select date"
              type="date"
              leftIcon="hugeicons:calendar-01"
              readOnly
            />
            <Input
              label="Price"
              placeholder="0.00"
              type="number"
              leftIcon="hugeicons:dollar-01"
              rightIcon="hugeicons:calculator"
              readOnly
            />
            <NumberInput
              label="Age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              min={0}
              max={120}
            />
            <Input
              label="Time"
              placeholder="Select time"
              type="time"
              leftIcon="hugeicons:clock-01"
              readOnly
            />
          </div>
        </motion.section>

        {/* Form Example */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Complete Form Example
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            A complete form showcasing input validation and user interaction.
          </p>
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                error={errors.name}
                required
              />
              <EmailInput
                label="Email Address"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={errors.email}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                error={errors.password}
                required
              />
              <PhoneInput
                label="Phone Number"
                placeholder="+90 555 123 45 67"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label="Message"
                placeholder="Tell us about yourself..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                leftIcon="hugeicons:message-01"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors font-medium"
            >
              Submit Form
            </button>
          </form>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
            Best Practices
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:checkmark-circle-01"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Clear Labels
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use descriptive labels that clearly indicate what information is
                expected
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:alert-circle"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Helpful Validation
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Provide clear, actionable error messages to guide users
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:access"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Accessibility
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Ensure proper keyboard navigation and screen reader support
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default InputShowcase;
