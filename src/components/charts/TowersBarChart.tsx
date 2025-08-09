import './Charts.scss';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { CellTower } from '../../types/cellTower';
import EmptyData from '../EmptyData';
import LoadingSpinner from '../loading';

export default function TowersPerCityBarChart({
  data,
  isLoading,
}: {
  data: CellTower[];
  isLoading: boolean;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || data.length === 0 || isLoading) return; // skip drawing if loading or no data

    const cityCounts = d3
      .rollups(
        data,
        v => v.length,
        d => d.city
      )
      .map(([city, count]) => ({ city, count }));

    const primaryColor = '#3c83f6';
    const width = 400;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const x = d3
      .scaleBand()
      .domain(cityCounts.map(d => d.city))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(cityCounts, d => d.count)!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Bars
    svg
      .append('g')
      .selectAll('rect')
      .data(cityCounts)
      .enter()
      .append('rect')
      .attr('x', d => x(d.city)!)
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => y(0) - y(d.count))
      .attr('fill', primaryColor)
      .attr('rx', 4)
      .attr('ry', 4);

    // X Axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('font-size', '0.85rem');

    // Y Axis
    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5))
      .selectAll('text')
      .style('font-size', '0.85rem');
  }, [data, isLoading]);

  return (
    <div className="chart-container">
      <h2>Towers per city</h2>

      {isLoading ? (
        <div className="chart-loading">
          <LoadingSpinner />
        </div>
      ) : data?.length > 0 ? (
        <svg ref={svgRef} width={400} height={250}></svg>
      ) : (
        <EmptyData />
      )}
    </div>
  );
}
