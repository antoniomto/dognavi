// CALCULADORA – lógica igual a la de producción
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calculatorForm");
  const resultDiv = document.getElementById("result");

  if (!form || !resultDiv) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById("dogWeight").value);
    const age = document.getElementById("dogAge").value;
    const activity = document.getElementById("activityLevel").value;
    const bodyCondition = document.getElementById("bodyCondition").value;
    const isNeutered = document.getElementById("isNeutered").value;

    if (!weight || !age || !activity || !bodyCondition || !isNeutered) {
      resultDiv.innerHTML = "<p>Completa todos los campos.</p>";
      resultDiv.style.display = "block";
      return;
    }

    // RER
    let RER = 70 * Math.pow(weight, 0.75);

    // Factor actividad base
    let activityFactor = 1.6; // default adulto moderado

    if (age === "puppy") {
      activityFactor = activity === "high" ? 3.0 : activity === "moderate" ? 2.5 : 2.0;
    } else if (age === "adult") {
      if (isNeutered === "yes") {
        activityFactor = activity === "high" ? 1.8 : activity === "moderate" ? 1.6 : 1.4;
      } else {
        activityFactor = activity === "high" ? 2.0 : activity === "moderate" ? 1.8 : 1.6;
      }
    } else if (age === "senior") {
      activityFactor = activity === "high" ? 1.6 : activity === "moderate" ? 1.4 : 1.2;
    }

    // Ajuste por condición corporal
    if (bodyCondition === "overweight") {
      activityFactor *= 0.8;
    } else if (bodyCondition === "underweight") {
      activityFactor *= 1.2;
    }

    // MER
    let MER = RER * activityFactor;

    // Gramos/día (alimento seco ≈ 350 kcal/100g)
    let gramsPerDay = (MER / 350) * 100;

    // Nº comidas
    let mealsPerDay = age === "puppy" ? 3 : 2;
    let gramsPerMeal = gramsPerDay / mealsPerDay;

    // Agua
    let waterMin = weight * 50;
    let waterMax = weight * 60;

    resultDiv.innerHTML = `
      <h3>✨ Resultado de Alimentación Personalizada</h3>
      
      <div class="result-detail">
        <strong>Calorías diarias necesarias:</strong> ${Math.round(MER)} kcal/día
      </div>
      
      <div class="result-detail">
        <strong>Cantidad de alimento seco:</strong> ${Math.round(gramsPerDay)} gramos/día
      </div>
      
      <div class="result-detail">
        <strong>Distribución:</strong> ${Math.round(gramsPerMeal)} gramos por comida (${mealsPerDay} comidas al día)
      </div>
      
      <div class="result-detail">
        <strong>Agua recomendada:</strong> ${Math.round(waterMin)}–${Math.round(waterMax)} ml/día
      </div>

      <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,179,71,0.2); border-radius: 8px;">
        <strong>💡 Consejo Profesional:</strong> Estos valores son para alimento seco estándar (≈350 kcal/100g).
        ${bodyCondition === "overweight" ? " Para ayudar a tu perro a perder peso, considera aumentar ejercicio y reducir premios." : ""}
        ${bodyCondition === "underweight" ? " Consulta con tu veterinario para descartar problemas de salud si tu perro no gana peso." : ""}
        Siempre revisa la tabla nutricional de tu alimento específico.
      </div>

      <div style="text-align: center; margin-top: 1.5rem;">
        <a href="#productos" class="btn-primary">Ver Productos Recomendados</a>
      </div>
    `;
    resultDiv.style.display = "block";

    resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });

    if (typeof gtag !== "undefined") {
      gtag("event", "calculator_completed", {
        dog_weight: weight,
        dog_age: age,
        activity_level: activity
      });
    }
  });
});
