# Instrucciones para Agregar Certificados PDF

## 📁 Ubicación de los Archivos

Para agregar los PDFs de tus certificados, sigue estos pasos:

### 1. Ubicar la Carpeta de Certificados
Los PDFs deben colocarse en la siguiente ruta:
```
src/assets/certificates/
```

### 2. Nomenclatura de Archivos
Para mantener orden y facilitar el acceso, nombra los archivos siguiendo este formato:
```
[organizacion]_[curso]_[año].pdf
```

**Ejemplos:**
- `datacamp_introduction_to_shell_2025.pdf`
- `datacamp_mlops_concepts_2025.pdf`
- `coursera_uci_problem_solving_2025.pdf`
- `ibm_generative_ai_intro_2024.pdf`
- `mintic_ai_bootcamp_2025.pdf`

### 3. Lista de Certificados a Agregar

Basándome en la información proporcionada, estos son los certificados que debes agregar:

#### DataCamp (5 certificados)
1. `datacamp_introduction_to_shell_2025.pdf`
2. `datacamp_mlops_concepts_2025.pdf`
3. `datacamp_mlops_deployment_2025.pdf`
4. `datacamp_supervised_learning_scikit_2025.pdf`
5. `datacamp_etl_elt_python_2025.pdf`
6. `datacamp_introduction_mlflow_2025.pdf`

#### Coursera - IBM (4 certificados)
7. `coursera_ibm_generative_ai_intro_2024.pdf`
8. `coursera_ibm_ai_introduction_2024.pdf`
9. `coursera_ibm_prompt_engineering_2024.pdf`
10. `coursera_ibm_ai_essentials_2024.pdf`

#### Coursera - University of Michigan (3 certificados)
11. `coursera_umich_data_science_python_2023.pdf`
12. `coursera_umich_python_getting_started_2022.pdf`
13. `coursera_umich_python_data_structures_2022.pdf`

#### Coursera - Otros (2 certificados)
14. `coursera_imperial_linear_algebra_2023.pdf`
15. `coursera_uci_problem_solving_2025.pdf`

#### Platzi (1 certificado)
16. `platzi_introduccion_nube_2025.pdf`

#### MinTIC Colombia (1 certificado)
17. `mintic_ai_bootcamp_intermedio_2025.pdf`

### 4. Verificación de Descarga

Una vez que hayas colocado todos los PDFs en la carpeta `src/assets/certificates/`, la estructura debería verse así:

```
src/
└── assets/
    └── certificates/
        ├── datacamp_introduction_to_shell_2025.pdf
        ├── datacamp_mlops_concepts_2025.pdf
        ├── datacamp_mlops_deployment_2025.pdf
        ├── datacamp_supervised_learning_scikit_2025.pdf
        ├── datacamp_etl_elt_python_2025.pdf
        ├── datacamp_introduction_mlflow_2025.pdf
        ├── coursera_ibm_generative_ai_intro_2024.pdf
        ├── coursera_ibm_ai_introduction_2024.pdf
        ├── coursera_ibm_prompt_engineering_2024.pdf
        ├── coursera_ibm_ai_essentials_2024.pdf
        ├── coursera_umich_data_science_python_2023.pdf
        ├── coursera_umich_python_getting_started_2022.pdf
        ├── coursera_umich_python_data_structures_2022.pdf
        ├── coursera_imperial_linear_algebra_2023.pdf
        ├── coursera_uci_problem_solving_2025.pdf
        ├── platzi_introduccion_nube_2025.pdf
        └── mintic_ai_bootcamp_intermedio_2025.pdf
```

### 5. Funcionalidad de Descarga

Los botones de "Descargar Certificado" en el portafolio ya están configurados para buscar estos archivos. Una vez que agregues los PDFs, los usuarios podrán descargarlos directamente desde la página.

### 6. Recomendaciones de Tamaño
- Mantén los archivos PDF optimizados (preferiblemente menores a 2MB cada uno)
- Asegúrate de que la calidad sea legible pero no excesivamente pesada

### 7. Backup
Considera mantener una copia de seguridad de todos los certificados en una ubicación segura (Google Drive, OneDrive, etc.)

---

**Nota:** Los certificados ya están listados en el portafolio con toda la información correcta. Solo necesitas agregar los archivos PDF para habilitar las descargas.
