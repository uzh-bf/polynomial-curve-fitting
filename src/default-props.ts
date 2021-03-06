import { DefaultProps } from './types';

export const defaultProps: DefaultProps = {
  curve: {
    name: 'Random Polynomial',
    description: 'This is some random polynomial.',
    xAxis: { min: -5, max: 10, label: 'x Values' },
    yAxis: { min: -5, max: 10, label: 'y Values' },

    // the order of the polynomial to plot
    polynomialOrder: 3,
  },
  settings: {
    // crosshair indicating the position of the mouse pointer on the coordinate system
    showCrosshair: true,
    crosshairColor: 'gray',

    // crosshair and point on the curve based on the x coordinate of the mouse pointer
    // if this crosshair is displayed, the other one will not be displayed
    showCrosshairOnCurve: true,
    crosshairOnCurveColor: 'gray',

    // whether the curve should be plotted as dots or not (= as a continuous line)
    showDottedCurve: false,

    // curve resulting from the least squares regression through the draggable points
    curve: {
      color: 'steelblue',
      strokeWidth: 1.5,
    },

    // curve (always a continuous line) throught the initial points
    initialCurve: {
      color: 'gray',
      strokeWidth: 1,
    },

    // points that can be dragged and are used for the least suqares regression to get the polynomial curve
    draggablePoint: {
      color: 'navy',
      radius: 8.0,
    },

    // element within the svg that contains the coordinate system, curves, and draggable points
    // title and axis labels are located relative to the graph but are directly drawn on the svg
    graph: {
      axis: {
        color: 'black',
        labels: {
          color: 'black',
          fontFamily: 'sans-serif',
          fontSize: 0.8, // rem
        },
        strokeWidth: 2.0,
      },

      grid: {
        color: 'lightgray',
      },

      // margin of the graph (within the svg) in pixel
      margin: { top: 30, right: 20, bottom: 50, left: 50 },
      title: {
        color: 'black',
        fontFamily: 'sans-serif',
        fontSize: 1.0, // rem
      },
    },

    svg: {
      id: 'polynomial-graph',
      // size of the final SVG in pixel
      size: { width: 750, height: 450 },
    },

    // configure what to draw and what not
    drawTitle: true,
    drawGrid: true,
    drawAxisLabels: true,
    drawDraggablePoints: true,

    graphOnly: false,

    // whether the coordinate system should be rescaled so that all draggable curve points are visible
    autoRescale: false,

    // margin (in percentage of the total width/height) around the auto rescaled view so that no draggable
    // curve point is placed on the border
    autoRescaleMargin: 0.25,
  },
  internationalization: {
    common: {
      determinationCoefficient: 'Coefficient of Determination',
      resetZoom: 'Reset Zoom',
    },
    curveSettings: {
      title: 'Polynomial Equation and Points',
      polynomialOrder: { label: 'Polynomial Order' },
      xCoordinate: { label: 'X-Coordinate' },
      yCoordinate: { label: 'Y-Coordinate' },
    },
    textSettings: {
      title: 'Text Settings',
      curveName: { label: 'Curve', placeholder: 'Curve Name' },
      xAxis: { label: 'X-Axis', placeholder: 'X-Axis Label' },
      yAxis: { label: 'Y-Axis', placeholder: 'Y-Axis Label' },
      description: {
        label: 'Description',
        placeholder: 'Describe the purpose, properties and peculiarities of the curve.',
      },
    },
  },
};
