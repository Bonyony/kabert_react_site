import React from "react";
import "./products.css";

const Products = () => {
  return (
    <div className="kabert__products m-6 text-gray-700" id="products">
      <h1 className="text-6xl font-bold py-4 m-5 mt-16 bg-gradient-to-r from-emerald-500 to-slate-700 text-transparent bg-clip-text inline-block">
        High-quality Products
      </h1>
      <div className="kabert__products-container">
        <div className="kabert__products-fiberglass">
          <h4 className="text-4xl">Fiberglass Cloth</h4>
          <p>
            Since 1979 Kabert Industries has been weaving fiberglass cloth in
            Lynn, Indiana for the aluminum industry. Fiberglass cloth is an
            inexpensive and effective method of non-ferrous molten metal
            distribution and filtration. <br /> Kabert Industries cloth is
            available in a variety of styles. Plain weave is a simple weave
            where the warp yarns run over and under the fill yarns. Similarly,
            twill weave consists of the warp yarns running over two or more fill
            yarns. The leno weave style interlocks the warp yarns, which cross
            over each other and join together with the fill yarns. Also, three,
            four and six strand cloths are available. <br /> All of Kabert
            Industries cloth is woven to specification on approximately 100
            linear yard rolls. Standard widths are obtainable for each style.
            Minimum orders may apply on some widths. Standard or brown finishes
            are available.
          </p>
        </div>
        <div className="kabert__products-gaskets">
          <h4 className="text-4xl">Gaskets</h4>
          <p>
            Gaskets are an inexpensive method of sealing and insulating troughs.
            Fiberglass insulation is die or hand cut to any specification
            gasket. Gaskets can be sewn onto fiberglass trough socks to filter
            out large impurities upstream so they will not break the sniff
            nozzle and downstream so they will not block the control pin. The
            temperature prior to breakdown is 600 to 700 degrees F. Fiberglass
            insulation is available in a variety of thickness and densities.{" "}
            <br />
            <strong>Density</strong>: 2 LB, 3 LB, 4 LB, or 6 LB <br />{" "}
            <strong>Thickness</strong>: 1/2", 3/4", or 1"
          </p>
        </div>
        <div className="kabert__products-vacuum">
          <h4 className="text-4xl">Vacuum Formed Shapes</h4>
          <p>
            Kabert Industries vacuum formed shapes are produced by dewatering a
            slurry of Fiberfrax Bulk Ceramic Fibers and special high temperature
            binders. This manufacturing method permits considerable freedom to
            vary shape, thickness, density and hardness. Often the vacuum
            casting technique provides the most economical answer to producing
            large quantities of parts in simple or complex configurations.{" "}
          </p>
          {/* There will need to be tables and lists for the rest of the information provided here */}
        </div>
        <div className="kabert__products-bags">
          <h4 className="text-4xl">Mini Channel Bag</h4>
          <p>
            An inexpensive and effective method of distributing molten aluminum
            to appropriate areas of the mold. Kabert Industries mini channel
            bags have been successfully used since 1980 in all alloys including
            body and lid.
          </p>
          {/* There will need to be tables and lists for the rest of the information provided here */}
        </div>
      </div>
      <div className="kabert__products-table">
        {/* Put this in an expandable thing, may not even be added as it is very confusing */}
        <table class="table-fixed">
          <thead>
            <tr>
              <th className="border border-slate-300">Style Number</th>
              <th className="border border-slate-300">Strand Warp</th>
              <th className="border border-slate-300">Diameter Fill</th>
              <th className="border border-slate-300">Strand Count</th>
              <th className="border border-slate-300">Holes per Square Inch</th>
              <th className="border border-slate-300">Hole Size</th>
              <th className="border border-slate-300">Percent Open Area</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KI-2433</td>
              <td>0.03</td>
              <td>0.033</td>
              <td>14 x 13</td>
              <td>182</td>
              <td>0.00182</td>
              <td>33.1</td>
            </tr>
            <tr>
              <td>KI-2403</td>
              <td>0.03</td>
              <td>0.033</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2383</td>
              <td>0.03</td>
              <td>0.033</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2373</td>
              <td>0.033</td>
              <td>0.035</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2363</td>
              <td>0.033</td>
              <td>0.035</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2353</td>
              <td>0.033</td>
              <td>0.035</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2384</td>
              <td>0.032</td>
              <td>0.035</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2374</td>
              <td>0.033</td>
              <td>0.035</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-2366</td>
              <td>0.045</td>
              <td>0.045</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-1590</td>
              <td>0.04</td>
              <td>0.035</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-1553</td>
              <td>0.0021</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-1593</td>
              <td>0.0021</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-1613</td>
              <td>0.0021</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-7628</td>
              <td>0.0021</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-3434</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>KI-3712220</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
