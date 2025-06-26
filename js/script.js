// Funciones de paginación
        function updatePagination(totalItems) {
            const totalPages = Math.ceil(totalItems / pageSize);
            studentsCountEl.textContent = `Mostrando ${Math.min(pageSize, totalItems)} de ${totalItems} estudiantes`;
            
            prevBtn.disabled = currentPage <= 1;
            nextBtn.disabled = currentPage >= totalPages;
        }

        function goToPage(page) {
            currentPage = page;
            fetchStudents(currentCourseId);
        }

        // Funciones de UI
        function showLoading() {
            loadingEl.classList.remove('hidden');
            attendanceContentEl.classList.add('hidden');
            errorMessageEl.classList.add('hidden');
        }

        function hideLoading() {
            loadingEl.classList.add('hidden');
        }

        function showError(message) {
            errorTextEl.textContent = message;
            errorMessageEl.classList.remove('hidden');
        }

        // Funciones básicas para cambiar entre vistas
        function showView(viewId) {
            document.getElementById('list-view').style.display = viewId === 'list-view' ? 'block' : 'none';
            document.getElementById('add-view').style.display = viewId === 'add-view' ? 'block' : 'none';
            
            if (viewId === 'list-view') {
            }
        }

        function editStudent(studentId) {
            // Aquí cargaríamos los datos del alumno antes de mostrar el formulario
            document.getElementById('form-title').textContent = 'Editar Alumno';
            showView('add-view');
            // Código para cargar los datos del alumno en el formulario
        }

        function deleteStudent(studentId) {
            if (confirm('¿Está seguro que desea eliminar este alumno?')) {
                // Código para eliminar el alumno
                alert('Alumno eliminado correctamente');
            }
        }

        function toggleDropdown(id) {
            document.getElementById(id).classList.toggle('hidden');
        }

        // Funciones de utilidad
        function toggleDropdown(id) {
            document.getElementById(id).classList.toggle('hidden');
        }

        function printReport() {
            // Implementación para imprimir reporte
            alert('Funcionalidad de impresión se conectará al API');
        }

        function editStudent(id) {
            // Implementación para editar estudiante
            alert(`Editar estudiante con ID: ${id}`);
        }

        function deleteStudent(id) {
            if (confirm('¿Estás seguro de eliminar este estudiante?')) {
                // Implementación para eliminar estudiante
                alert(`Eliminar estudiante con ID: ${id}`);
            }
        }

        // Event listeners
        dateInputEl.addEventListener('change', () => {
            if (currentCourseId) fetchStudents(currentCourseId);
        });

        prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
        nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
