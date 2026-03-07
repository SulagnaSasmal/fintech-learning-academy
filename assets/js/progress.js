/* FinTech Learning Academy — Progress Tracker (localStorage) */
(function () {
  const STORE_KEY = 'fla_progress';

  function getStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
  }
  function saveStore(data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  }

  /* Mark a lesson complete: markComplete('payments', 'mod1-lesson1') */
  window.markComplete = function (courseId, lessonId) {
    const store = getStore();
    if (!store[courseId]) store[courseId] = {};
    store[courseId][lessonId] = true;
    saveStore(store);
    updateProgressDisplay(courseId);
  };

  /* Get % progress for a course */
  window.getProgress = function (courseId, totalLessons) {
    const store = getStore();
    if (!store[courseId]) return 0;
    const done = Object.keys(store[courseId]).length;
    return Math.round((done / totalLessons) * 100);
  };

  /* Update all progress bars on the current page */
  function updateProgressDisplay(courseId) {
    document.querySelectorAll(`[data-course="${courseId}"]`).forEach(bar => {
      const total = parseInt(bar.dataset.total || 12, 10);
      const pct = window.getProgress(courseId, total);
      const fill = bar.querySelector('.progress-fill');
      const label = bar.querySelector('.progress-pct');
      if (fill) fill.style.width = pct + '%';
      if (label) label.textContent = pct + '%';
    });
  }

  /* On page load, refresh all progress bars */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-course]').forEach(bar => {
      const courseId = bar.dataset.course;
      const total = parseInt(bar.dataset.total || 12, 10);
      const pct = window.getProgress(courseId, total);
      const fill = bar.querySelector('.progress-fill');
      const label = bar.querySelector('.progress-pct');
      if (fill) fill.style.width = pct + '%';
      if (label) label.textContent = pct + '%';
    });

    /* Module accordion toggle */
    document.querySelectorAll('.module-header').forEach(header => {
      header.addEventListener('click', function () {
        const item = this.closest('.module-item');
        item.classList.toggle('open');
      });
    });

    /* Quiz interaction */
    document.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', function () {
        const question = this.closest('.quiz-question');
        if (question.dataset.answered) return;
        question.dataset.answered = 'true';
        const isCorrect = this.dataset.correct === 'true';
        this.classList.add(isCorrect ? 'correct' : 'incorrect');
        if (!isCorrect) {
          question.querySelector('[data-correct="true"]')?.classList.add('correct');
        }
        updateQuizScore();
      });
    });
  });

  function updateQuizScore() {
    const questions = document.querySelectorAll('.quiz-question');
    const answered = document.querySelectorAll('.quiz-question[data-answered]').length;
    if (answered < questions.length) return;
    const correct = document.querySelectorAll('.quiz-option.correct').length;
    const scoreEl = document.getElementById('quiz-score');
    const scoreCount = document.getElementById('score-count');
    if (scoreEl) scoreEl.style.display = 'block';
    if (scoreCount) scoreCount.textContent = correct;
  }
})();
