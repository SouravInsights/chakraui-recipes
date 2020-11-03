import React, {
  useMemo,
  useCallback,
  useRef,
  useEffect,
  useState
} from "react";
import {
  Box,
  Button,
  Flex,
  Avatar,
  Badge,
  Text,
  Stack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core";
import { Node, Editor, Transforms, Range, createEditor } from "slate";
import {
  Slate,
  ReactEditor,
  Editable,
  withReact,
  useSelected,
  useFocused
} from "slate-react";
import { withHistory } from "slate-history";
import { UserTag, GalleryAlt, Location } from "../Icons/Icons";
import { Portal } from "./Editor";

interface FeedPostModalProps {
  feedPostIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  feedPostOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const FeedPostModal = ({
  feedPostIsOpen,
  feedPostOnClose
}: FeedPostModalProps) => {
  const ref = useRef<HTMLDivElement | null>();
  const [value, setValue] = useState<Node[]>(initialValue);
  const [target, setTarget] = useState<Range | undefined>();
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(
    () => withMentions(withReact(withHistory(createEditor()))),
    []
  );

  const chars = CHARACTERS.filter((c) =>
    c.toLowerCase().startsWith(search.toLowerCase())
  ).slice(0, 10);

  const onKeyDown = useCallback(
    (event) => {
      if (target) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            break;
          case "ArrowUp":
            event.preventDefault();
            const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case "Tab":
          case "Enter":
            event.preventDefault();
            Transforms.select(editor, target);
            insertMention(editor, chars[index]);
            setTarget(null);
            break;
          case "Escape":
            event.preventDefault();
            setTarget(null);
            break;
        }
      }
    },
    [index, search, target]
  );

  useEffect(() => {
    if (target && chars.length > 0) {
      const el = ref.current;
      const domRange = ReactEditor.toDOMRange(editor, target);
      const rect = domRange.getBoundingClientRect();
      el.style.top = `${rect.top + window.pageYOffset + 24}px`;
      el.style.left = `${rect.left + window.pageXOffset}px`;
    }
  }, [chars.length, editor, index, search, target]);
  return (
    <Modal isOpen={feedPostIsOpen} onClose={feedPostOnClose} size="2xl">
      <ModalOverlay>
        <ModalContent w={["90%", "80%", "none", "none"]}>
          <ModalHeader
            fontSize="20px"
            fontWeight="bold"
            color="#072252"
            lineHeight="23px"
          >
            Create post
          </ModalHeader>
          <ModalCloseButton borderRadius="50%" _focus={{ boxShadow: "none" }} />
          <ModalBody>
            <Flex>
              <Avatar
                size="md"
                name="Sourav Kumar Nanda"
                src="https://pbs.twimg.com/profile_images/1263485884734730241/s0YwDUi0_400x400.jpg"
              />
              <Box mx="10px" flexDirection="column">
                <Text fontSize="16px" fontWeight="bold">
                  Sourav Kumar Nanda
                </Text>
                <Badge
                  fontSize="14px"
                  fontWeight="normal"
                  color="#485363"
                  textTransform="none"
                >
                  Public
                </Badge>
              </Box>
            </Flex>
            <Flex my="30px">
              <Slate
                editor={editor}
                value={value}
                onChange={(value) => {
                  setValue(value);
                  const { selection } = editor;

                  if (selection && Range.isCollapsed(selection)) {
                    const [start] = Range.edges(selection);
                    const wordBefore = Editor.before(editor, start, {
                      unit: "word"
                    });
                    const before =
                      wordBefore && Editor.before(editor, wordBefore);
                    const beforeRange =
                      before && Editor.range(editor, before, start);
                    const beforeText =
                      beforeRange && Editor.string(editor, beforeRange);
                    const beforeMatch =
                      beforeText && beforeText.match(/^@(\w+)$/);
                    const after = Editor.after(editor, start);
                    const afterRange = Editor.range(editor, start, after);
                    const afterText = Editor.string(editor, afterRange);
                    const afterMatch = afterText.match(/^(\s|$)/);

                    if (beforeMatch && afterMatch) {
                      setTarget(beforeRange);
                      setSearch(beforeMatch[1]);
                      setIndex(0);
                      return;
                    }
                  }

                  setTarget(null);
                }}
              >
                <Editable
                  renderElement={renderElement}
                  onKeyDown={onKeyDown}
                  placeholder="Think out of the box..."
                />
                {target && chars.length > 0 && (
                  <Portal>
                    <div
                      ref={ref}
                      style={{
                        top: "-9999px",
                        left: "-9999px",
                        position: "absolute",
                        zIndex: 1,
                        padding: "3px",
                        background: "white",
                        borderRadius: "4px",
                        boxShadow: "0 1px 5px rgba(0,0,0,.2)"
                      }}
                    >
                      {chars.map((char, i) => (
                        <div
                          key={char}
                          style={{
                            padding: "1px 3px",
                            borderRadius: "3px",
                            background: i === index ? "#B4D5FF" : "transparent"
                          }}
                        >
                          {char}
                        </div>
                      ))}
                    </div>
                  </Portal>
                )}
              </Slate>
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Stack direction="row">
              <IconButton
                aria-label="anything"
                icon={<GalleryAlt boxSize={6} color="#485363" />}
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ boxShadow: "none" }}
                _active={{ bg: "none" }}
              />
              <IconButton
                aria-label="anything"
                icon={<UserTag boxSize={6} color="#485363" />}
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ boxShadow: "none" }}
                _active={{ bg: "none" }}
              />
              <IconButton
                aria-label="anything"
                icon={<Location boxSize={6} color="#485363" />}
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ boxShadow: "none" }}
                _active={{ bg: "none" }}
              />
            </Stack>
            <Box>
              <Button colorScheme="blue">Post</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

const withMentions = (editor) => {
  const { isInline, isVoid } = editor;

  editor.isInline = (element) => {
    return element.type === "mention" ? true : isInline(element);
  };

  editor.isVoid = (element) => {
    return element.type === "mention" ? true : isVoid(element);
  };

  return editor;
};

const insertMention = (editor, character) => {
  const mention = { type: "mention", character, children: [{ text: "" }] };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

const Element = (props) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case "mention":
      return <MentionElement {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const MentionElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <Box
      {...attributes}
      contentEditable={false}
      style={{
        padding: "3px 3px 2px",
        margin: "0 1px",
        verticalAlign: "baseline",
        zIndex: 999,
        display: "inline-block",
        borderRadius: "4px",
        backgroundColor: "#eee",
        fontSize: "0.9em",
        boxShadow: selected && focused ? "0 0 0 2px #B4D5FF" : "none"
      }}
    >
      @{element.character}
      {children}
    </Box>
  );
};

const initialValue = [
  {
    children: [
      {
        text:
          "Hey, friends. 👋 I'm joining Google as a Senior Software Engineer at Mountain View, California, US from January 1, 2030. 🎉"
      }
    ]
  },
  {
    children: [
      { text: "Suggested friends to tag " },
      {
        type: "mention",
        character: "Sk. Ayaz",
        children: [{ text: "" }]
      },
      { text: " or " },
      {
        type: "mention",
        character: "Suraj Sahoo",
        children: [{ text: "" }]
      },
      { text: "!" }
    ]
  }
];

const CHARACTERS = ["Sourav Kumar Nanda", "Suraj Sahoo", "Sk Ayaz"];
