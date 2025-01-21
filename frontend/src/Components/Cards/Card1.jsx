<div class="card">
        <div class="header">
          <h2>{fullName}</h2>
          <div class="badges">
            <span class="badge">{nominationType}</span>
          </div>
        </div>
        <p class="subtitle">{company} • {jobTitle}</p>
        <div class="status">
          <span class="status-badge">{category}</span> <br><br>
          <span class="votes">
            <b id="votes-<%= nom._id %>">{voteCount}</b> <i class="icon">👍</i> votes
          </span>
          <span class="jury">Jury Score: <b>0</b></span>
        </div>
        <div class="buttons">
          <button class="profile-btn">
            <span class="badge linkedin">
            </span>
            <a class="linkedin-link" target="_blank" href={linkedIn}>LinkedIn Profile</a>
          </button>
            <button class="vote-btn" data-id="<%= nom._id %>">👍 Vote</button>
        </div>
        <hr>
        <p class="nomination">Nominated by {peerFullName}</p>
      </div>
  </div>