"use client";

import "@xyflow/react/dist/style.css";

import dagre from "@dagrejs/dagre";
import {
    Background,
    type Edge,
    Handle,
    type Node,
    type NodeProps,
    Position,
    ReactFlow,
    useNodesState,
} from "@xyflow/react";
import { ArrowLeft, BadgeCheck, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";

type Dog = {
    name: string;
    registration: string;
    image: string;
};

type DogNodeData = Dog & {
    role?: "root" | "parent" | "grandparent";
    label?: "Sire" | "Dam";
};

const profile: Dog = {
    name: "Bruno Von Hause",
    registration: "BPKC-004829",
    image: "/doge-1.webp",
};

const dogs: Record<string, DogNodeData> = {
    bruno: { ...profile, role: "root" },
    sire: {
        name: "Titan's King",
        registration: "BPKC #BP-102",
        image: "/doggo.webp",
        role: "parent",
        label: "Sire",
    },
    dam: {
        name: "Lady Storm",
        registration: "BPKC #BP-102",
        image: "/doge-3.webp",
        role: "parent",
        label: "Dam",
    },
    sireFather: {
        name: "Titan's King",
        registration: "BPKC #BP-102",
        image: "/doge-2.webp",
        role: "grandparent",
    },
    sireMother: {
        name: "Lady Storm",
        registration: "BPKC #BP-102",
        image: "/doge-3.webp",
        role: "grandparent",
    },
    damFather: {
        name: "Titan's King",
        registration: "BPKC #BP-102",
        image: "/doge-2.webp",
        role: "grandparent",
    },
    damMother: {
        name: "Lady Storm",
        registration: "BPKC #BP-102",
        image: "/doge-3.webp",
        role: "grandparent",
    },
};

const nodeWidth = 210;
const nodeHeight = 76;
const rootWidth = 152;
const rootHeight = 194;

const nodeSpecs: Array<{ id: string; data: DogNodeData }> = Object.entries(
    dogs,
).map(([id, data]) => ({ id, data }));

const edges: Edge[] = [
    { id: "bruno-sire", source: "bruno", target: "sire", type: "smoothstep" },
    { id: "bruno-dam", source: "bruno", target: "dam", type: "smoothstep" },
    {
        id: "sire-father",
        source: "sire",
        target: "sireFather",
        type: "smoothstep",
    },
    {
        id: "sire-mother",
        source: "sire",
        target: "sireMother",
        type: "smoothstep",
    },
    { id: "dam-father", source: "dam", target: "damFather", type: "smoothstep" },
    { id: "dam-mother", source: "dam", target: "damMother", type: "smoothstep" },
];

function getLayoutedNodes(): Node<DogNodeData>[] {
    const graph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    graph.setGraph({
        rankdir: "LR",
        nodesep: 22,
        ranksep: 72,
        marginx: 24,
        marginy: 24,
    });

    for (const { id, data } of nodeSpecs) {
        graph.setNode(id, {
            width: data.role === "root" ? rootWidth : nodeWidth,
            height: data.role === "root" ? rootHeight : nodeHeight,
        });
    }

    for (const edge of edges) {
        graph.setEdge(edge.source, edge.target);
    }

    dagre.layout(graph);

    return nodeSpecs.map(({ id, data }) => {
        const { x, y } = graph.node(id);
        const width = data.role === "root" ? rootWidth : nodeWidth;
        const height = data.role === "root" ? rootHeight : nodeHeight;

        return {
            id,
            type: "dog",
            data,
            position: { x: x - width / 2, y: y - height / 2 },
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
        };
    });
}

function DogNode({ data }: NodeProps<Node<DogNodeData>>) {
    const featured = data.role === "root";

    return (
        <article className={`dog-node ${featured ? "dog-node--root" : ""}`}>
            <Handle type="target" position={Position.Left} />
            {data.label && <span className="dog-node__label">{data.label}</span>}
            <Image
                src={data.image}
                alt=""
                width={featured ? 112 : 48}
                height={featured ? 112 : 48}
                className="dog-node__image"
            />
            <div className="min-w-0">
                <h3>{data.name}</h3>
                <p>{data.registration}</p>
            </div>
            <Handle type="source" position={Position.Right} />
        </article>
    );
}

const nodeTypes = { dog: DogNode };

export default function Page() {
    const [nodes, , onNodesChange] = useNodesState(getLayoutedNodes());
    const onInit = useCallback(
        (instance: { fitView: (options?: { padding?: number }) => void }) => {
            instance.fitView({ padding: 0.18 });
        },
        [],
    );
    const memoizedEdges = useMemo(() => edges, []);

    return (
        <main className="min-h-screen bg-background px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pt-32">
            <div className="mx-auto max-w-[1180px]">
                <div className="flex items-center justify-between border-b border-border pb-4 text-xs text-muted-foreground">
                    <Link
                        href="/database"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="size-3.5" />
                        Back to Database
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                    >
                        <Heart className="size-3.5" />
                        Add to favorite
                    </button>
                </div>

                <section className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-7">
                    <Image
                        src={profile.image}
                        alt={profile.name}
                        width={144}
                        height={144}
                        className="size-28 rounded-2xl object-cover sm:size-32"
                    />
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                {profile.name}
                            </h1>
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                                <BadgeCheck className="size-3" />
                                Verified Registration
                            </span>
                        </div>
                        <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                            BPKC ID
                        </p>
                        <p className="mt-1 font-semibold">{profile.registration}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Male <span className="mx-1">•</span> Lilac Tri
                        </p>
                    </div>
                </section>

                <div className="">
                    <div className="h-[620px] min-w-[760px]">
                        <ReactFlow
                            nodes={nodes}
                            edges={memoizedEdges}
                            nodeTypes={nodeTypes}
                            onNodesChange={onNodesChange}
                            onInit={onInit}
                            fitView
                            nodesDraggable={false}
                            nodesConnectable={false}
                            panOnDrag={false}
                            panOnScroll={false}
                            zoomOnScroll={false}
                            zoomOnPinch={false}
                            zoomOnDoubleClick={false}
                            proOptions={{ hideAttribution: true }}
                        >
                        </ReactFlow>
                    </div>
                </div>
            </div>
        </main>
    );
}
