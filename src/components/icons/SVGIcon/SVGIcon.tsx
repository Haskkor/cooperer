import * as React from 'react';

// A 'wrapper' for SVG icons to get consistent rendering and API - renders the path or group (g) as children in a single colour
// To compose an SVG Icon, look at existing examples in the icons/ folder

export type Props = Partial<{
  className?: string;
  colour?: string; // pass a hex string for a colour other than white
  dataTestId?: string;
  height?: number; // pass a number for a larger height in px (will autoscale width unless width also passed)
  id: string;
  style?: any;
  viewBoxHeight?: number; // used for setting the ViewBox and aspect ratio
  viewBoxWidth?: number; // used for setting the ViewBox and aspect ratio
  width?: number; // pass a number for a larger width in px (will autoscale height unless height also passed)
  analyticsclass?: string;
  onClick?(e: React.MouseEvent): void;
  onMouseEnter?(): void;
  onMouseLeave?(): void;
}>;

const SVGICON: React.SFC<Props> = ({
  children,
  className,
  colour = 'currentcolor',
  dataTestId,
  height,
  id = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
  viewBoxWidth = 30,
  viewBoxHeight = 30,
  width
}) => {
  const aspectRatio = viewBoxWidth / viewBoxHeight;
  const renderWidth = width || (width && width * aspectRatio) || viewBoxWidth;

  return (
    <svg
      className={className}
      data-testid={dataTestId}
      fill={colour}
      height={height}
      id={id}
      onClick={e => onClick && onClick(e)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={renderWidth}
    >
      <g fillRule="nonzero">{children}</g>
    </svg>
  );
};

export default SVGICON;
