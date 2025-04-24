

<svg viewBox="0 0 {width} {height}">
    <g transform="translate(0, {usableArea.bottom})" bind:this={xAxis} />
    <g transform="translate({usableArea.left}, 0)" bind:this={yAxis} />
    <g class="gridlines" transform="translate({usableArea.left}, 0)" bind:this={yAxisGridlines} />
  
  
    <g class="dots">
      {#each filteredCommits as commit, index (commit.id) }
  
          <circle   
              cx={ xScale(commit.datetime) }
              cy={ yScale(commit.hourFrac) }
              r={ rScale(commit.totalLines) }
              fill="steelblue"
              fill-opacity="0.5"
              on:mouseenter={evt => dotInteraction(index, evt)}
              on:mouseleave={evt => dotInteraction(index, evt)}
              on:click={ evt => dotInteraction(index, evt) }
              class:selected={ clickedCommits.includes(commit) }
          />
      {/each}
      </g>
      
  </svg>
  