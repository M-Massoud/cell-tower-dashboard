import './charts.scss';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import type { CellTower } from '../../types/cellTower';
import EmptyData from '../EmptyData';

export default function TowersStatusPieChart({ data }: { data: CellTower[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [counts, setCounts] = useState<
    { status: string; count: number; color: string }[]
  >([]);

  useEffect(() => {
    const statusData = [
      {
        status: 'Active',
        count: data.filter(d => d.status === 'active').length,
        color: '#28a745',
      },
      {
        status: 'Offline',
        count: data.filter(d => d.status === 'offline').length,
        color: '#dc3545',
      },
    ];
    setCounts(statusData);

    const width = 180;
    const height = 180;
    const radius = Math.min(width, height) / 2;

    const pie = d3
      .pie<{ status: string; count: number; color: string }>()
      .value(d => d.count);

    const arc = d3
      .arc<d3.PieArcDatum<{ status: string; count: number }>>()
      .innerRadius(0)
      .outerRadius(radius);

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    g.selectAll('path')
      .data(pie(statusData))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);
  }, [data]);

  return (
    <div className="chart-container">
      <h2>Towers status distribution</h2>
      {data?.length > 0 ? (
        <>
          <svg ref={svgRef} width={180} height={180}></svg>
          <div className="legend">
            {counts.map(item => (
              <div className="legend-item" key={item.status}>
                <span
                  className="legend-color"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="legend-label">
                  {item.status}: {item.count}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <EmptyData />
      )}
    </div>
  );
}
