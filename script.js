/* ========================================================
   HELPERS: Add / Remove entries and bullet points
   ======================================================== */

function removeEntry(btn) {
    const card = btn.closest('.entry-card');
    const container = card.parentElement;
    if (container.querySelectorAll('.entry-card').length > 1) {
        card.remove();
    } else {
        alert('At least one entry is required. Clear the fields if not needed.');
    }
}

function addBullet(btn) {
    const group = btn.closest('.bullets-group');
    const list = group.querySelector('.bullets-list');
    const row = document.createElement('div');
    row.className = 'bullet-row';
    row.innerHTML = `
        <span class="bullet-icon">&#8226;</span>
        <input type="text" class="bullet-input" placeholder="Add detail...">
        <button type="button" class="remove-bullet-btn" onclick="removeBullet(this)" title="Remove">&times;</button>
    `;
    list.appendChild(row);
    row.querySelector('.bullet-input').focus();
}

function removeBullet(btn) {
    const row = btn.closest('.bullet-row');
    const list = row.parentElement;
    if (list.querySelectorAll('.bullet-row').length > 1) {
        row.remove();
    } else {
        row.querySelector('.bullet-input').value = '';
    }
}

/* ========================================================
   ADD SECTION ENTRIES
   ======================================================== */

function addSkill() {
    const c = document.getElementById('skillsContainer');
    const d = document.createElement('div');
    d.className = 'entry-card skill-entry';
    d.innerHTML = `
        <button type="button" class="remove-entry-btn" onclick="removeEntry(this)" title="Remove">&times;</button>
        <input type="text" class="skill-label" placeholder="Category (e.g. Language)">
        <input type="text" class="skill-value" placeholder="Values (e.g. Python, SQL)">
    `;
    c.appendChild(d);
}

function addExperience() {
    const c = document.getElementById('experienceContainer');
    const d = document.createElement('div');
    d.className = 'entry-card exp-entry';
    d.innerHTML = `
        <button type="button" class="remove-entry-btn" onclick="removeEntry(this)" title="Remove">&times;</button>
        <div class="row-2">
            <input type="text" class="exp-title" placeholder="Job Title *">
            <input type="text" class="exp-duration" placeholder="Duration (e.g. June 2024 - Present)">
        </div>
        <div class="row-2">
            <input type="text" class="exp-company" placeholder="Company *">
            <input type="text" class="exp-location" placeholder="Location (e.g. Indore, India)">
        </div>
        <div class="bullets-group">
            <label>Bullet Points</label>
            <div class="bullets-list">
                <div class="bullet-row">
                    <span class="bullet-icon">&#8226;</span>
                    <input type="text" class="bullet-input" placeholder="Responsibility / achievement...">
                    <button type="button" class="remove-bullet-btn" onclick="removeBullet(this)" title="Remove">&times;</button>
                </div>
            </div>
            <button type="button" class="add-bullet-btn" onclick="addBullet(this)">+ Add Bullet</button>
        </div>
    `;
    c.appendChild(d);
}

function addProject() {
    const c = document.getElementById('projectsContainer');
    const d = document.createElement('div');
    d.className = 'entry-card project-entry';
    d.innerHTML = `
        <button type="button" class="remove-entry-btn" onclick="removeEntry(this)" title="Remove">&times;</button>
        <div class="row-2">
            <input type="text" class="proj-title" placeholder="Project Title (e.g. Multilingual RAG Chatbot)">
            <input type="text" class="proj-meta" placeholder="Company & Duration (e.g. ClearTrail, 2024-2025)">
        </div>
        <div class="bullets-group">
            <label>Bullet Points</label>
            <div class="bullets-list">
                <div class="bullet-row">
                    <span class="bullet-icon">&#8226;</span>
                    <input type="text" class="bullet-input" placeholder="Project detail...">
                    <button type="button" class="remove-bullet-btn" onclick="removeBullet(this)" title="Remove">&times;</button>
                </div>
            </div>
            <button type="button" class="add-bullet-btn" onclick="addBullet(this)">+ Add Bullet</button>
        </div>
    `;
    c.appendChild(d);
}

function addEducation() {
    const c = document.getElementById('educationContainer');
    const d = document.createElement('div');
    d.className = 'entry-card edu-entry';
    d.innerHTML = `
        <button type="button" class="remove-entry-btn" onclick="removeEntry(this)" title="Remove">&times;</button>
        <input type="text" class="edu-degree" placeholder="Degree (e.g. Bachelor of Technology)">
        <input type="text" class="edu-institution" placeholder="Institution">
        <div class="row-2">
            <input type="text" class="edu-duration" placeholder="Duration (e.g. 08/2018-08/2022)">
            <input type="text" class="edu-grade" placeholder="Grade (e.g. 86%)">
        </div>
    `;
    c.appendChild(d);
}

function addCertificate() {
    const c = document.getElementById('certificatesContainer');
    const d = document.createElement('div');
    d.className = 'entry-card cert-entry';
    d.innerHTML = `
        <button type="button" class="remove-entry-btn" onclick="removeEntry(this)" title="Remove">&times;</button>
        <input type="text" class="cert-name" placeholder="Certificate (e.g. Data Science and Machine Learning from Coursera)">
    `;
    c.appendChild(d);
}

function addCustomSection() {
    const c = document.getElementById('customSectionsContainer');
    const d = document.createElement('div');
    d.className = 'entry-card custom-section-entry';
    d.innerHTML = `
        <button type="button" class="remove-entry-btn" onclick="removeEntry(this)" title="Remove">&times;</button>
        <input type="text" class="custom-section-title" placeholder="Section Title (e.g. Hobbies, Awards, Publications)">
        <div class="bullets-group">
            <label>Items</label>
            <div class="bullets-list">
                <div class="bullet-row">
                    <span class="bullet-icon">&#8226;</span>
                    <input type="text" class="bullet-input" placeholder="Add item...">
                    <button type="button" class="remove-bullet-btn" onclick="removeBullet(this)" title="Remove">&times;</button>
                </div>
            </div>
            <button type="button" class="add-bullet-btn" onclick="addBullet(this)">+ Add Item</button>
        </div>
    `;
    c.appendChild(d);
}

/* ========================================================
   HELPER: Escape HTML to prevent XSS
   ======================================================== */
function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

/* ========================================================
   HELPER: Escape + apply **bold** markdown → <strong>
   Use fmt() instead of esc() wherever bold is allowed.
   ======================================================== */
function fmt(str) {
    let safe = esc(str);
    safe = safe.replace(/\*\*([^*\n]{1,500}?)\*\*/g, '<strong>$1</strong>');
    return safe;
}

/* ========================================================
   GENERATE PREVIEW — ATS-friendly, matches screenshot
   ======================================================== */

function generatePreview() {
    const fullName  = document.getElementById('fullName').value.trim();
    const subtitle  = document.getElementById('subtitle').value.trim();
    const email     = document.getElementById('email').value.trim();
    const phone     = document.getElementById('phone').value.trim();
    const location  = document.getElementById('location').value.trim();
    const linkedin  = document.getElementById('linkedin').value.trim();
    const github    = document.getElementById('github').value.trim();
    const summary   = document.getElementById('summary').value.trim();

    let h = '';

    // ---- Name ----
    if (fullName) h += `<h1 class="r-name">${esc(fullName)}</h1>`;

    // ---- Subtitle ----
    if (subtitle) h += `<p class="r-subtitle">${esc(subtitle)}</p>`;

    // ---- Contact ----
    if (email || phone || location || linkedin || github) {
        h += '<div class="r-contact">';
        if (email) h += `<div class="r-contact-row"><i class="fas fa-envelope"></i> ${esc(email)}</div>`;
        if (phone) h += `<div class="r-contact-row"><i class="fas fa-phone"></i> ${esc(phone)}</div>`;
        if (location) h += `<div class="r-contact-row"><i class="fas fa-map-marker-alt"></i> ${esc(location)}</div>`;
        if (linkedin) h += `<div class="r-contact-row"><i class="fab fa-linkedin"></i> ${esc(linkedin)}</div>`;
        if (github) h += `<div class="r-contact-row"><i class="fab fa-github"></i> ${esc(github)}</div>`;
        h += '</div>';
    }

    // ---- Professional Summary ----
    if (summary) {
        h += '<h2 class="r-section">Professional Summary</h2>';
        h += `<p class="r-summary">${fmt(summary)}</p>`;
    }

    // ---- Technical Skills ----
    const skillEntries = document.querySelectorAll('.skill-entry');
    let skillRows = '';
    skillEntries.forEach(entry => {
        const cat = entry.querySelector('.skill-label').value.trim();
        const val = entry.querySelector('.skill-value').value.trim();
        if (cat && val) {
            skillRows += `<tr><td class="r-skill-cat">${esc(cat)}</td><td class="r-skill-val">: ${fmt(val)}</td></tr>`;
        }
    });
    if (skillRows) {
        h += '<h2 class="r-section">Technical Skills</h2>';
        h += `<table class="r-skills-table"><tbody>${skillRows}</tbody></table>`;
    }

    // ---- Experience ----
    const expEntries = document.querySelectorAll('.exp-entry');
    let expHtml = '';
    expEntries.forEach(entry => {
        const title    = entry.querySelector('.exp-title').value.trim();
        const company  = entry.querySelector('.exp-company').value.trim();
        const loc      = entry.querySelector('.exp-location').value.trim();
        const duration = entry.querySelector('.exp-duration').value.trim();
        if (!title && !company) return;

        expHtml += '<div class="r-entry">';
        expHtml += `<div class="r-entry-header"><span>${esc(title)}</span><span>${esc(duration)}</span></div>`;
        const subLine = company + (loc ? ', ' + loc : '');
        expHtml += `<div class="r-entry-sub"><span>${esc(subLine)}</span></div>`;

        const bullets = getBullets(entry);
        if (bullets.length) {
            expHtml += '<ul class="r-bullets">';
            bullets.forEach(b => { expHtml += `<li>${fmt(b)}</li>`; });
            expHtml += '</ul>';
        }
        expHtml += '</div>';
    });
    if (expHtml) {
        h += '<h2 class="r-section">Experience</h2>' + expHtml;
    }

    // ---- Projects ----
    const projEntries = document.querySelectorAll('.project-entry');
    let projHtml = '';
    projEntries.forEach(entry => {
        const title = entry.querySelector('.proj-title').value.trim();
        const meta  = entry.querySelector('.proj-meta').value.trim();
        if (!title) return;

        projHtml += '<div class="r-entry">';
        let heading = esc(title);
        if (meta) heading += ` (${esc(meta)})`;
        projHtml += `<p class="r-proj-heading">${heading}</p>`;

        const bullets = getBullets(entry);
        if (bullets.length) {
            projHtml += '<ul class="r-bullets">';
            bullets.forEach(b => { projHtml += `<li>${fmt(b)}</li>`; });
            projHtml += '</ul>';
        }
        projHtml += '</div>';
    });
    if (projHtml) {
        h += '<h2 class="r-section">Projects</h2>' + projHtml;
    }

    // ---- Education ----
    const eduEntries = document.querySelectorAll('.edu-entry');
    let eduHtml = '';
    eduEntries.forEach(entry => {
        const degree      = entry.querySelector('.edu-degree').value.trim();
        const institution = entry.querySelector('.edu-institution').value.trim();
        const duration    = entry.querySelector('.edu-duration').value.trim();
        const grade       = entry.querySelector('.edu-grade').value.trim();
        if (!degree && !institution) return;

        eduHtml += '<div class="r-edu-entry">';
        let line1 = '';
        if (degree) line1 += esc(degree);
        if (institution) line1 += (line1 ? ', ' : '') + esc(institution);
        eduHtml += `<p class="r-edu-line1">${line1}</p>`;
        let line2 = '';
        if (duration) line2 += esc(duration);
        if (grade) line2 += (line2 ? ' - ' : '') + esc(grade);
        if (line2) eduHtml += `<p class="r-edu-line2">${line2}</p>`;
        eduHtml += '</div>';
    });
    if (eduHtml) {
        h += '<h2 class="r-section">Education</h2>' + eduHtml;
    }

    // ---- Certificates ----
    const certEntries = document.querySelectorAll('.cert-entry');
    let certItems = '';
    certEntries.forEach(entry => {
        const name = entry.querySelector('.cert-name').value.trim();
        if (name) certItems += `<li>${fmt(name)}</li>`;
    });
    if (certItems) {
        h += '<h2 class="r-section">Certificates</h2>';
        h += `<ul class="r-cert-list">${certItems}</ul>`;
    }

    // ---- Custom Sections ----
    const customEntries = document.querySelectorAll('.custom-section-entry');
    customEntries.forEach(entry => {
        const sectionTitle = entry.querySelector('.custom-section-title').value.trim();
        if (!sectionTitle) return;

        const bullets = getBullets(entry);
        if (bullets.length) {
            h += `<h2 class="r-section">${esc(sectionTitle)}</h2>`;
            h += '<ul class="r-bullets">';
            bullets.forEach(b => { h += `<li>${fmt(b)}</li>`; });
            h += '</ul>';
        }
    });

    document.getElementById('resumePreview').innerHTML = h;
}

function getBullets(entry) {
    const inputs = entry.querySelectorAll('.bullet-input');
    const result = [];
    inputs.forEach(inp => {
        const v = inp.value.trim();
        if (v) result.push(v);
    });
    return result;
}

/* ========================================================
   DOWNLOAD PDF — uses html2pdf.js for clean ATS output
   ======================================================== */

function downloadResume() {
    const preview = document.getElementById('resumePreview');
    if (preview.querySelector('.empty-msg') || !preview.innerHTML.trim()) {
        alert('Please generate a preview first.');
        return;
    }

    const rawName = document.getElementById('fullName').value.trim() || 'Resume';
    const safeName = rawName.replace(/[^a-zA-Z0-9 _-]/g, '').replace(/\s+/g, '_');
    const filename = (safeName || 'Resume') + '_Resume.pdf';

    const cloned = preview.cloneNode(true);
    cloned.style.width = '210mm';
    cloned.style.padding = '20mm 18mm';
    cloned.style.background = '#fff';

    const opt = {
        margin:      0,
        filename:    filename,
        image:       { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, scrollY: 0 },
        jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:   { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(preview).save();
}
