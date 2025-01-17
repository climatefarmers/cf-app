import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Define the type for the form data
interface IFormInput {
  farmName: string;
  location: string;
  farmSize: number;
  mainProduction: string;
}

const FarmForm: React.FC = () => {
  const router = useRouter();

  // Initialize useForm with the type IFormInput
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });

  // Define the onSubmit handler with the type SubmitHandler<IFormInput>
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // Check if the farm name already exists
      const checkResponse = await fetch("/api/checkFarmName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ farmName: data.farmName }),
      });

      if (checkResponse.ok) {
        const checkData = await checkResponse.json();
        if (checkData.exists) {
          // Farm name already exists, redirect to overview
          router.push("/overview");
        } else {
          // Farm name does not exist, save the new farm info
          const saveResponse = await fetch("/api/saveFarmInfo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (saveResponse.ok) {
            console.log("Farm info saved successfully");
            router.push("/overview");
          } else {
            console.error("Failed to save farm info");
          }
        }
      } else {
        console.error("Failed to check farm name");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 mt-16"
    >
      <label>
        Farm Name
        <input
          type="text"
          {...register("farmName", { required: "Farm Name is required" })}
        />
        {errors.farmName && <p className="error">{errors.farmName.message}</p>}
      </label>

      <label>
        Location
        <input
          type="text"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && <p className="error">{errors.location.message}</p>}
      </label>

      <label>
        Farm Size
        <input
          type="number"
          {...register("farmSize", {
            required: "Farm Size is required",
            min: { value: 10, message: "Value should be bigger than 10" },
            max: { value: 100, message: "Value should be less than 100" },
          })}
        />
        {errors.farmSize && <p className="error">{errors.farmSize.message}</p>}
      </label>

      <label>
        Main Production
        <select
          {...register("mainProduction", {
            required: "Main Production is required",
          })}
        >
          <option value="">Select production</option>
          <option value="grains">Grains</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="livestock">Livestock</option>
          <option value="dairy">Dairy</option>
        </select>
        {errors.mainProduction && (
          <p className="error">{errors.mainProduction.message}</p>
        )}
      </label>

      <button type="submit" className="bg-lime">
        Continue
      </button>
    </form>
  );
};

export default FarmForm;
