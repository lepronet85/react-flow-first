"use client";

import {
  Edge,
  Node,
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Connection,
} from "@xyflow/react";
import { Box } from "@chakra-ui/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { addEdge } from "react-flow-renderer";
import PayementInit from "../Components/PayementInit";
import PaymentCountry from "../Components/paymentCountry";
import { initialEdges, initialNodes } from "../Components/Workflow.constants";
import PaymentProvider from "../Components/PaymentProvider";
import PayementProviderSelect from "../Components/PayementProviderSelect";
import CustomEdge from "../Components/CustomEdge";
import { CustomContextMenu } from "../Components/CustomContextMenu";

const nodeTypes = {
  paymentInit: PayementInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PayementProviderSelect,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

export default function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length} + 1`,
        type: "customEdge",
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges]
  );

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault(); // Empêche le menu contextuel par défaut du navigateur

    setMenuPosition({ x: event.pageX, y: event.pageY }); // Définit la position du menu
    setMenuVisible(true); // Affiche le menu
  };

  // Fonction pour cacher le menu contextuel
  const handleClick = () => {
    setMenuVisible(false); // Cache le menu
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      border="1px solid black"
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      {menuVisible && <CustomContextMenu menuPosition={menuPosition} />}
    </Box>
  );
}
