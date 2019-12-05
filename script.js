window.addEventListener('load',function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
      response.json().then(function(json) {
          function sortAstronauts(arr) {
              let sortingKey = {}
              for (i in arr) {
                  sortingKey[arr[i].hoursInSpace] = arr[i].id
              }
              Object.keys(sortingKey).sort()
              return sortingKey;
          }
          console.log(sortAstronauts(json)[1]);
          const container = document.getElementById('container');
          for (index in json) {
            let selectedNaut =  json[index]
          container.innerHTML = container.innerHTML + `
            <div class="astronaut">
                <div class="bio">
                    <h3>${selectedNaut.firstName + ' ' + selectedNaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${selectedNaut.hoursInSpace}</li>
                        <li>Active: ${selectedNaut.active}</li>
                        <li>Skills: ${selectedNaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${selectedNaut.picture}">
            </div>
        `}
      })
    })
  })