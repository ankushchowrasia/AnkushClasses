// Ankush Classes - Study Materials Renderer
// Dynamically reads from `studyStructure` and `materialsData` in `data/materials.js`

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('materials-container');
  const classSelectorButtons = document.querySelectorAll('.class-tab-btn');

  if (!container || typeof studyStructure === 'undefined') return;

  let activeClassId = 'class-12-isc'; // Default to Class 12 ISC, or toggleable

  function renderMaterials(classId) {
    const classData = studyStructure.find(c => c.classId === classId);
    if (!classData) return;

    let html = `
      <div class="mb-10">
        <div class="flex items-center gap-3 mb-2">
          <span class="badge-tag">${classData.board}</span>
          <h2 class="text-2xl font-bold">${classData.className} - ${classData.board}</h2>
        </div>
        <p class="text-gray-400 text-sm max-w-2xl">${classData.description}</p>
      </div>

      <div class="space-y-12">
    `;

    classData.subjects.forEach(subject => {
      // Find matching items from materialsData
      const items = (typeof materialsData !== 'undefined') ? materialsData.filter(m => 
        (m.class === classData.className.replace('Class ', '') || m.class === classData.className) &&
        m.board.toLowerCase() === classData.board.toLowerCase() &&
        m.subject.toLowerCase() === subject.name.toLowerCase()
      ) : [];

      html += `
        <div class="subject-section card" id="${subject.id}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#1e252d] gap-2">
            <div>
              <h3 class="text-xl font-bold text-white">${subject.name}</h3>
              <p class="text-sm text-gray-400 mt-1">${subject.description}</p>
            </div>
            <span class="text-xs font-semibold text-[#00BF63] bg-[#00BF63]/10 px-3 py-1 rounded-full border border-[#00BF63]/20 self-start sm:self-auto">
              ${items.length} ${items.length === 1 ? 'Resource' : 'Resources'}
            </span>
          </div>
      `;

      if (items.length === 0) {
        html += `
          <div class="py-8 px-6 rounded-lg bg-[#07090b] border border-dashed border-[#1e252d] text-center">
            <h4 class="text-base font-semibold text-gray-300 mb-1">Study materials coming soon.</h4>
            <p class="text-xs text-gray-500">Resources for this subject will be added here as they become available.</p>
          </div>
        `;
      } else {
        html += `<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">`;
        items.forEach(item => {
          html += `
            <div class="bg-[#07090b] border border-[#1e252d] rounded-lg p-5 flex flex-col justify-between hover:border-[#00BF63] transition-colors">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-[#00BF63] bg-[#00BF63]/10 px-2 py-0.5 rounded">
                    ${item.resourceType || 'Study Material'}
                  </span>
                  <span class="text-xs text-gray-500">${item.board} Class ${item.class}</span>
                </div>
                <h4 class="text-base font-semibold text-white mb-2">${item.title}</h4>
                ${item.description ? `<p class="text-xs text-gray-400 mb-4">${item.description}</p>` : ''}
              </div>
              <div class="pt-4 border-t border-[#1e252d] flex items-center justify-between mt-2">
                <a href="${item.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-green text-xs py-1.5 px-3">
                  View Document
                </a>
                ${item.downloadUrl ? `
                  <a href="${item.downloadUrl}" download class="text-xs text-gray-400 hover:text-white transition">Download</a>
                ` : ''}
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  // Handle Tab clicks
  classSelectorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      classSelectorButtons.forEach(b => b.classList.remove('active', 'bg-[#00BF63]', 'text-black'));
      classSelectorButtons.forEach(b => b.classList.add('bg-[#0f1317]', 'text-gray-300'));
      btn.classList.add('active', 'bg-[#00BF63]', 'text-black');
      btn.classList.remove('bg-[#0f1317]', 'text-gray-300');

      activeClassId = btn.dataset.classId;
      renderMaterials(activeClassId);
    });
  });

  // Initial render
  renderMaterials(activeClassId);
});
