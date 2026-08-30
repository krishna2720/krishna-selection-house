// A small decorative divider inspired by the zigzag "kinari" border
// pattern found on Indian textiles. It's placed between homepage
// sections instead of a plain flat line, to tie the design back to
// the shop's identity as a clothing store.
//
// It receives a "color" prop so it can match the background it sits on.
function SectionDivider({ color = "#7A1E3C" }) {
  return (
    <div className="w-full overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 100 4" preserveAspectRatio="none" className="w-full h-3">
        {/* This single polyline is repeated by tiling a small pattern
            across the full width, creating a continuous zigzag. */}
        <pattern id="zigzag" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 4 L2 0 L4 4" fill="none" stroke={color} strokeWidth="0.6" />
        </pattern>
        <rect width="100" height="4" fill="url(#zigzag)" />
      </svg>
    </div>
  );
}

export default SectionDivider;
