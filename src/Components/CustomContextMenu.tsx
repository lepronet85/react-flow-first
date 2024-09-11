export const CustomContextMenu = ({
  menuPosition,
}: {
  menuPosition: { x: number; y: number };
}) => {
  return (
    <div
      className="!absolute bg-white border border-[#ccc] z-[1000]"
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      <ul className="list-none p-0 m-0">
        <li className="py-[8px] px-[12px] cursor-pointer hover:bg-[#f0f0f0]">
          Option 1
        </li>
        <li className="py-[8px] px-[12px] cursor-pointer hover:bg-[#f0f0f0]">
          Option 2
        </li>
        <li className="py-[8px] px-[12px] cursor-pointer hover:bg-[#f0f0f0]">
          Option 3
        </li>
      </ul>
    </div>
  );
};
