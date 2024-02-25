document.addEventListener('DOMContentLoaded', function() {
    var showMemoBtn = document.getElementById('showMemoBtn');
    var showIndexBtn = document.getElementById('showIndexBtn');
    var showDictionaryBtn = document.getElementById('showDictionaryBtn');
    var memoMode = document.getElementById('memoMode');
    var indexMode = document.getElementById('indexMode');
    var dictionaryMode = document.getElementById('dictionaryMode');
    var memoModeHon = document.getElementById('memoModeHon');
    var indexModeHon = document.getElementById('indexModeHon');
  
    showMemoBtn.addEventListener('click', function() {
      memoMode.style.display = 'block';
      memoModeHon.style.display ='block';
      indexMode.style.display = 'none';
      indexModeHon.style.display ='none';
      dictionaryMode.style.display = 'none';
    });
  
    showIndexBtn.addEventListener('click', function() {
      memoMode.style.display = 'none';
      memoModeHon.style.display ='none';
      indexMode.style.display = 'block';
      indexModeHon.style.display ='block';
      dictionaryMode.style.display = 'none';
    });

    showDictionaryBtn.addEventListener('click', function() {
    memoMode.style.display = 'none';
    memoModeHon.style.display ='none';
    indexModeHon.style.display ='block';
    indexMode.style.display = 'none';
    dictionaryMode.style.display = 'block';
    });
  });
  